import { ImageSourcePropType } from 'react-native';

export type Vehicle = {
  id: string;
  brand: string;
  model: string;
  horsepower: number;
  photo: ImageSourcePropType;
};

export type Place = {
  id: string;
  address: string;
  city: string;
};

export type Destination = {
  id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  image: ImageSourcePropType;
};

export const vehicles: Vehicle[] = [
  { id: '1', brand: 'Ford', model: 'Mustang GT', horsepower: 450, photo: require('@/assets/images/vehicles/mustang.jpg') },
  { id: '2', brand: 'Porsche', model: 'Panamera 4S', horsepower: 473, photo: require('@/assets/images/vehicles/panamera.jpg') },
  { id: '3', brand: 'Lamborghini', model: 'Aventador S', horsepower: 740, photo: require('@/assets/images/vehicles/aventador.jpg') },
  { id: '4', brand: 'McLaren', model: '720S', horsepower: 710, photo: require('@/assets/images/vehicles/mclaren.jpg') },
  { id: '5', brand: 'BMW', model: 'M4 Competition', horsepower: 503, photo: require('@/assets/images/vehicles/bmw-m4.jpg') },
];

export const places: Place[] = [
  { id: '1', address: 'Boulevard du 20 Mai', city: 'Yaoundé' },
  { id: '2', address: 'Rue Joss, Bonanjo', city: 'Douala' },
  { id: '3', address: 'Plage de Grand Batanga', city: 'Kribi' },
  { id: '4', address: 'Avenue des Champs-Élysées', city: 'Paris' },
  { id: '5', address: 'Piazza San Marco', city: 'Venice' },
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Eiffel Tower',
    city: 'Paris',
    country: 'France',
    description: 'Iron lattice tower on the Champ de Mars, the most visited paid monument in the world.',
    image: require('@/assets/images/places/paris.jpg'),
  },
  {
    id: '2',
    name: 'Rialto Bridge',
    city: 'Venice',
    country: 'Italy',
    description: 'The oldest of the four bridges spanning the Grand Canal, lined with small shops.',
    image: require('@/assets/images/places/venice.jpg'),
  },
  {
    id: '3',
    name: 'Oia Village',
    city: 'Santorini',
    country: 'Greece',
    description: 'White-washed houses hanging over the caldera, famous for its sunsets on the Aegean Sea.',
    image: require('@/assets/images/places/santorini.jpg'),
  },
  {
    id: '4',
    name: 'Pyramids of Giza',
    city: 'Giza',
    country: 'Egypt',
    description: 'The last standing wonder of the ancient world, built more than 4,500 years ago.',
    image: require('@/assets/images/places/giza.jpg'),
  },
  {
    id: '5',
    name: 'Colosseum',
    city: 'Rome',
    country: 'Italy',
    description: 'The largest amphitheatre ever built, where gladiators fought in front of 50,000 people.',
    image: require('@/assets/images/places/rome.jpg'),
  },
];
