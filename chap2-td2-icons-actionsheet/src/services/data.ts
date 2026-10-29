export type Person = {
  id: string;
  name: string;
  phone: string;
  email: string;
};

export type Place = {
  id: string;
  name: string;
  city: string;
};

export const initialPeople: Person[] = [
  { id: '1', name: 'Thérèse Ytembe', phone: '+237 690 11 22 33', email: 'therese@isi.cm' },
  { id: '2', name: 'Dave Pessa', phone: '+237 677 44 55 66', email: 'dave@isi.cm' },
  { id: '3', name: 'Aïcha Bello', phone: '+237 655 12 34 56', email: 'aicha@isi.cm' },
  { id: '4', name: 'Jean-Paul Nkodo', phone: '+237 699 87 65 43', email: 'jp.nkodo@isi.cm' },
  { id: '5', name: 'Marie Ngo Biyong', phone: '+237 670 98 76 54', email: 'marie@isi.cm' },
];

export const places: Place[] = [
  { id: '1', name: 'Mont Cameroun', city: 'Buea' },
  { id: '2', name: 'Chutes de la Lobé', city: 'Kribi' },
  { id: '3', name: 'Marché Central', city: 'Douala' },
  { id: '4', name: 'Musée National', city: 'Yaoundé' },
  { id: '5', name: 'Parc de Waza', city: 'Maroua' },
  { id: '6', name: 'Lac Awing', city: 'Bamenda' },
];
