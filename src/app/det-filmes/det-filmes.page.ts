import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-det-filmes',
  templateUrl: './det-filmes.page.html',
  styleUrls: ['./det-filmes.page.scss'],
})
export class DetFilmesPage implements OnInit {

  information: string = "";
  id: number = 0;
  title: string = "";
  generate: string = "";
  duration: number = 0;
  img: string = "";

  constructor( private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.id = params['id'];
      console.log("Passou no detalhe");
  })

        this.carregarDetalhes();    
      }


      async carregarDetalhes() {
        let url = 'http://lmcapifilmes.herokuapp.com/api/production/' + this.id;
    
        fetch(url)
          .then((resposta) => {
            return resposta.json();
          })
          .then((json) => {
            this.img = json.Production.photo_link;
            this.title = json.Production.title;
            this.duration = json.Production.duration;
            this.information = json.Production.description;
            this.generate = json.Production.genre;
          });}

}
