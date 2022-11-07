import { Routes } from '@angular/router';
import { NavigatorComponent } from 'src/app/components/navigator/navigator.component';
import { SummaryPageComponent } from 'src/app/components/summary-page/summary-page.component';

export const routes: Routes = [
  { path: '', component: SummaryPageComponent },
  { path: 'navigator', component: NavigatorComponent },
];
