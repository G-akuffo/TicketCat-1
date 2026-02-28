-- ==========================================
-- 1. EXTENSIONS & ENUMS
-- ==========================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Updated with ROYAL and GENERAL
CREATE TYPE ticket_tier_style AS ENUM ('GOLD', 'SILVER', 'BRONZE', 'ROYAL', 'GENERAL');
CREATE TYPE ticket_status AS ENUM ('ACTIVE', 'SCANNED', 'LISTED', 'TRANSFERRED', 'VOID');
CREATE TYPE transaction_type AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'PURCHASE', 'SALE', 'TRANSFER');

-- ==========================================
-- 2. CORE TABLES
-- ==========================================

-- PROFILES: Extends Supabase Auth
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  phone_number TEXT,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- WALLETS: The user's internal bank
CREATE TABLE public.wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE NOT NULL,
  balance DECIMAL(12, 2) DEFAULT 0.00 CHECK (balance >= 0),
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- EVENTS: With Organizer Badge Logic
CREATE TABLE public.events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  time TIME NOT NULL,
  location TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  seating_map_url TEXT,
  organizer_name TEXT NOT NULL,
  is_organizer_verified BOOLEAN DEFAULT FALSE, -- Powers the "Verified Badge"
  organizer_fee_paid_until TIMESTAMPTZ, -- For the annual fee logic
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- TICKET TIERS: Linked to Event and UI Styles
CREATE TABLE public.ticket_tiers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  capacity INTEGER NOT NULL,
  available_count INTEGER NOT NULL,
  tier_design ticket_tier_style DEFAULT 'GENERAL',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- USER TICKETS: The ownership record
CREATE TABLE public.user_tickets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  event_id UUID REFERENCES public.events(id) NOT NULL,
  tier_id UUID REFERENCES public.ticket_tiers(id) NOT NULL,
  ticket_code TEXT UNIQUE NOT NULL, -- The Alphanumeric code (TC-XXXX)
  status ticket_status DEFAULT 'ACTIVE',
  purchase_date TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  redeemed_at TIMESTAMPTZ
);

-- MARKET LISTINGS: Secondary Market
CREATE TABLE public.market_listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  seller_id UUID REFERENCES public.profiles(id) NOT NULL,
  ticket_id UUID REFERENCES public.user_tickets(id) UNIQUE NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- BOOKMARKS: For the Favorites tab
CREATE TABLE public.bookmarks (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  event_id UUID REFERENCES public.events(id) ON DELETE CASCADE NOT NULL,
  PRIMARY KEY (user_id, event_id)
);

-- TRANSACTIONS: Financial history
CREATE TABLE public.transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  type transaction_type NOT NULL,
  amount DECIMAL(12, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==========================================
-- 3. ROW LEVEL SECURITY (RLS)
-- ==========================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_tiers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.market_listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- General Access
CREATE POLICY "Public read events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Public read tiers" ON public.ticket_tiers FOR SELECT USING (true);
CREATE POLICY "Public read market" ON public.market_listings FOR SELECT USING (is_active = true);
CREATE POLICY "Public read profiles" ON public.profiles FOR SELECT USING (true);

-- User Restricted Access (Owner Only)
CREATE POLICY "Users view own wallet" ON public.wallets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users view own tickets" ON public.user_tickets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users manage own bookmarks" ON public.bookmarks FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users view own transactions" ON public.transactions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- ==========================================
-- 4. TRIGGERS & AUTOMATION
-- ==========================================

-- Function to auto-create wallet on signup
CREATE OR REPLACE FUNCTION public.create_wallet_for_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.wallets (user_id, balance) VALUES (NEW.id, 0.00);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_on_profile_created
AFTER INSERT ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.create_wallet_for_new_user();

-- Function to handle available_count when a ticket is created
CREATE OR REPLACE FUNCTION public.decrement_tier_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.ticket_tiers
  SET available_count = available_count - 1
  WHERE id = NEW.tier_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER trigger_on_ticket_purchase
AFTER INSERT ON public.user_tickets
FOR EACH ROW EXECUTE FUNCTION public.decrement_tier_count();
