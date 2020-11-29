import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Carros',
    icon: 'car-outline',
    children: [
      {
        title: 'Listagem de Carros',
        link: '/pages/cars/cars-list',
      }
    ],
  },
];
