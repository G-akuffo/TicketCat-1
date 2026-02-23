export interface TicketTier {
  id: string;
  name: string;
  price: string;
  description: string;
  available: number;
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
  ticketTiers?: TicketTier[];
}
