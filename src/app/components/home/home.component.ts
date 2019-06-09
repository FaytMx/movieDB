import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newMovies: any[] = [];
  public popularMovies: any[] = [];
  public popularMoviesKids: any[] = [];

  constructor(public pS: PeliculasService) {
    this.pS.getNewsRelease()
      .subscribe(data => {
        // console.log(data);
        this.newMovies = data.results.slice(0, 6);
        console.log(this.newMovies);
      });

    this.pS.getPopulares()
      .subscribe(data => {
        // console.log(data);
        this.popularMovies = data.results.slice(0, 6);
        console.log(this.popularMovies);
      });

    this.pS.getPopularesKids()
      .subscribe(data => {
        // console.log(data);
        this.popularMoviesKids = data.results.slice(0, 6);
        console.log(this.popularMoviesKids);
      });
  }

  ngOnInit() {
  }

}
