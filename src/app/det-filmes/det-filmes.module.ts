import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetFilmesPageRoutingModule } from './det-filmes-routing.module';
import { DetFilmesPage } from './det-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetFilmesPageRoutingModule
  ],
  declarations: [DetFilmesPage]
})
export class DetFilmesPageModule {}
