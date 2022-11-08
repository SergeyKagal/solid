import { Component, DoCheck } from '@angular/core';
import { headerLinks } from 'src/data/links';
import { ILink } from 'src/types/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links: ILink[] = headerLinks;
}
