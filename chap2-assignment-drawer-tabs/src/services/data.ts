import { Apple, Banana, Cherry, Citrus, Grape, LucideIcon } from 'lucide-react-native';

export type Person = {
  id: string;
  name: string;
  role: string;
  city: string;
};

export type Fruit = {
  id: string;
  name: string;
  origin: string;
  calories: number;
  vitamin: string;
  color: string;
  icon: LucideIcon;
};

export const people: Person[] = [
  { id: '1', name: 'Thérèse Ytembe', role: 'Lecturer', city: 'Yaoundé' },
  { id: '2', name: 'Dave Pessa', role: 'Lecturer', city: 'Douala' },
  { id: '3', name: 'Aïcha Bello', role: 'Mobile developer', city: 'Garoua' },
  { id: '4', name: 'Jean-Paul Nkodo', role: 'UX designer', city: 'Kribi' },
  { id: '5', name: 'Marie Ngo Biyong', role: 'Product owner', city: 'Bafoussam' },
  { id: '6', name: 'Samuel Etoo', role: 'QA engineer', city: 'Buea' },
];

export const fruits: Fruit[] = [
  { id: '1', name: 'Apple', origin: 'Central Asia', calories: 52, vitamin: 'C', color: '#DC2626', icon: Apple },
  { id: '2', name: 'Banana', origin: 'Southeast Asia', calories: 89, vitamin: 'B6', color: '#CA8A04', icon: Banana },
  { id: '3', name: 'Cherry', origin: 'Europe', calories: 50, vitamin: 'C', color: '#BE123C', icon: Cherry },
  { id: '4', name: 'Grape', origin: 'Middle East', calories: 69, vitamin: 'K', color: '#7E22CE', icon: Grape },
  { id: '5', name: 'Orange', origin: 'China', calories: 47, vitamin: 'C', color: '#EA580C', icon: Citrus },
  { id: '6', name: 'Lemon', origin: 'India', calories: 29, vitamin: 'C', color: '#65A30D', icon: Citrus },
];
