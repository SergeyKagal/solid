import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HeaderComponent } from './components/header/header.component';
import { routes } from 'src/data/routes';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    NavigatorComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
