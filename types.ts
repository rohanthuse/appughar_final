export interface Ride {
  id: string;
  name: string;
  description: string;
  category: 'THRILL' | 'FAMILY' | 'KIDS';
  image: string;
  minHeight?: string; // e.g., "120cm"
}

export interface TicketType {
  id: string;
  name: string;
  price: number;
  features: string[];
  color: string;
}

export interface PlannerResponse {
  title: string;
  schedule: Array<{
    time: string;
    activity: string;
    description: string;
    icon: 'RIDE' | 'FOOD' | 'REST' | 'SHOW';
  }>;
  tips: string[];
}
