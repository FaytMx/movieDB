import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  public pelicula: any = {};
  constructor(public pS: PeliculasService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pS.getPelicula(id)
      .subscribe(data => {
        console.log(data);
        this.pelicula = data;
      });
  }

}
