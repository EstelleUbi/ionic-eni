import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/film';
import { FilmProvider } from '../providers/films.provider';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private id: string;
  private film: Film;

  constructor(private route: ActivatedRoute, private filmP: FilmProvider) {
      this.route.params.subscribe( async (params)=>{
          this.id = params.id;
          try {
            this.film = await this.filmP.details(this.id);
          }catch(err){
            console.log(err);
          }
      });
  }

  ngOnInit() {
  }

}
