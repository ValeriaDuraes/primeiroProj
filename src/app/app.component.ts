import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private rota: Router,
    public toastController: ToastController,
  ) {}

  detalhesFilme(id){
    console.log("passou "+id); 
    this.rota.navigate(['/detalhes-filmes', {id:id}])
  }
}
