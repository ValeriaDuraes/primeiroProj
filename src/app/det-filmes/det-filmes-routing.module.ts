import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetFilmesPage } from './det-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: DetFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetFilmesPageRoutingModule {}
