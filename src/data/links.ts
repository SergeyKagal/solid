import { ILink } from 'src/types/link.type';

export const headerLinks: ILink[] = [
  {
    id: 0,
    path: '/navigator',
    title: 'Navigator',
    param: { tab: 0 },
  },
  {
    id: 1,
    path: '/',
    title: 'Summary page',
    param: null,
  },
];

export const navigatorLinks: ILink[] = [
  {
    id: 0,
    path: '/navigator',
    title: 'Income',
    param: { tab: 0 },
  },
  {
    id: 1,
    path: '/navigator',
    title: 'Outcome',
    param: { tab: 1 },
  },
  {
    id: 2,
    path: '/navigator',
    title: 'Loans',
    param: { tab: 2 },
  },
  {
    id: 3,
    path: '/navigator',
    title: 'Investments',
    param: { tab: 3 },
  },
];
