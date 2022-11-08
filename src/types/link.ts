import { Params } from '@angular/router';

export interface ILink {
  id: number;
  path: string;
  title: string;
  param: Params | null;
  isActive: boolean;
}
