import { ILink } from 'src/types/link';

export const links: ILink[] = [
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
