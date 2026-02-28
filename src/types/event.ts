export type TierDesign = "GOLD" | "SILVER" | "BRONZE" | "ROYAL" | "GENERAL";

export interface TicketTier {
  id: string;
  name: string;
  price: string;
  description: string;
  available: number;
  tierDesign?: TierDesign;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  description: string;
  price: string;
  organizer?: string;
  isVerified?: boolean;
  ticketTiers?: TicketTier[];
}
