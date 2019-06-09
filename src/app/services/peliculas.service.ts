import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey = '01f7f48ef99862e480405726bad276af';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares() {
    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

  getPopularesKids() {
    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

  getNewsRelease() {
    const fecha = new Date();

    const fechaInicio = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}`;
    const fechaFin = `${fecha.getFullYear()}-${fecha.getMonth()}-01`;

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${fechaFin}&primary_release_date.lte=${fechaInicio}&api_key=${this.apikey}&language=es`;
    console.log(url);
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

  buscarPelicula(texto: string) {
    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

  getPelicula(id: number) {
    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this.http.get(url).pipe(
      map((res: any) => res)
    );
  }

}
