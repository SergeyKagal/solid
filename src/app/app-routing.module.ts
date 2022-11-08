import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from 'src/data/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
