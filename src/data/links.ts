import { ILink } from 'src/types/link';

export const headerLinks: ILink[] = [
  {
    id: 0,
    path: '/navigator',
    title: 'Navigator',
    param: { tab: 0 },
    isActive: false,
  },
  {
    id: 1,
    path: '/',
    title: 'Summary page',
    param: null,
    isActive: false,
  },
];

export const navigatorLinks: ILink[] = [
  {
    id: 0,
    path: '/navigator',
    title: 'Income',
    param: { tab: 0 },
    isActive: false,
  },
  {
    id: 1,
    path: '/navigator',
    title: 'Outcome',
    param: { tab: 1 },
    isActive: false,
  },
  {
    id: 2,
    path: '/navigator',
    title: 'Loans',
    param: { tab: 2 },
    isActive: false,
  },
  {
    id: 3,
    path: '/navigator',
    title: 'Investments',
    param: { tab: 3 },
    isActive: false,
  },
];
