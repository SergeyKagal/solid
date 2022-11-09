import { ICard } from 'src/types/cards.type';
import { navigatorLinks } from './links';

export const cards: ICard[] = navigatorLinks.map((link) => ({
  ...link,
  transactionsNumber: 0,
}));
