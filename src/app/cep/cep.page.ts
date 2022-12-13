import { Component, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep: string = "";
  estado: string = "";
  cidade: string = "";
  bairro: string = "";
  rua: string = "";

  constructor() { }
  ngOnInit() {}

  buscarEndereco() {
    if(this.cep == ""){
    alert("Necessário preencher o campo CEP!");
    return;
    }

    //let url = "https://viacep.com.br/ws/"" + this.cep + "/json/""; //Concatenada
    let url = `https://viacep.com.br/ws/${this.cep}/json/`; //Interpolação
    console.log(url);

    fetch(url)
    .then((resposta) => {
      return resposta.json();
    })
    .then((json) => {
      this.estado = json.uf;
      this.cidade = json.localidade;
      this.bairro = json.bairro;
      this.rua = json.logradouro;
    })
  }
}
