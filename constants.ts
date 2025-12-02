import { Ride, TicketType } from "./types";

export const RIDES: Ride[] = [
  {
    id: '1',
    name: 'Sky Screamer',
    description: 'A gravity-defying drop tower that will leave you breathless!',
    category: 'THRILL',
    image: 'https://picsum.photos/id/1067/800/600',
    minHeight: '140cm'
  },
  {
    id: '2',
    name: 'Roller Coaster',
    description: 'Twist and turn through the loops of excitement.',
    category: 'THRILL',
    image: 'https://picsum.photos/id/1059/800/600',
    minHeight: '130cm'
  },
  {
    id: '3',
    name: 'Appu Express',
    description: 'A delightful train journey around the park for the whole family.',
    category: 'FAMILY',
    image: 'https://picsum.photos/id/1035/800/600',
  },
  {
    id: '4',
    name: 'Aqua Splash',
    description: 'Get soaked in this refreshing water log ride.',
    category: 'FAMILY',
    image: 'https://picsum.photos/id/1043/800/600',
  },
  {
    id: '5',
    name: 'Mini Pirate',
    description: 'A gentle swing ship designed for our little captains.',
    category: 'KIDS',
    image: 'https://picsum.photos/id/1056/800/600',
  },
  {
    id: '6',
    name: 'Merry Go Round',
    description: 'The classic carousel that brings smiles to everyone.',
    category: 'KIDS',
    image: 'https://picsum.photos/id/1022/800/600',
  },
];

export const TICKETS: TicketType[] = [
  {
    id: 'entry',
    name: 'Entry Only',
    price: 50,
    features: ['Park Entry', 'Pay per ride', 'Access to food court'],
    color: 'bg-appu-blue'
  },
  {
    id: 'happy',
    name: 'Happy Band',
    price: 599,
    features: ['Unlimited Rides', 'One-time Go Kart', 'Park Entry', 'Priority Access'],
    color: 'bg-appu-pink'
  },
  {
    id: 'family',
    name: 'Family Pack (4)',
    price: 2000,
    features: ['4 Happy Bands', 'Meal Vouchers', 'Free Parking'],
    color: 'bg-appu-purple'
  }
];
