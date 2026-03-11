import { MenuCategory } from '../models/menu.model';

export const MENU_DATA: readonly MenuCategory[] = [
  {
    id: 1,
    name: 'Тип 1',
    items: [
      { id: 1, name: 'Item 1', value: 5 },
      { id: 2, name: 'Item 2', value: 10 },
      { id: 3, name: 'Item 3', value: 15 },
      { id: 4, name: 'Item 4', value: 20 },
    ],
  },
  {
    id: 2,
    name: 'Тип 2',
    items: [
      { id: 5, name: 'Item 5', value: 25 },
      { id: 6, name: 'Item 6', value: 30 },
      { id: 7, name: 'Item 7', value: 35 },
      { id: 8, name: 'Item 8', value: 40 },
    ],
  },
  {
    id: 3,
    name: 'Тип 3',
    items: [
      { id: 9, name: 'Item 9', value: 45 },
      { id: 10, name: 'Item 10', value: 50 },
      { id: 11, name: 'Item 11', value: 55 },
    ],
  },
];
