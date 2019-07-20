import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class MovieService {

  url = 'http://localhost:4000/portal/movie'

  constructor(
    private http: Http) { }

  getMovies(genre: number) {
    if (genre === -1) {
      // get all the movies
      return this.http.get(this.url)
    }

    return this.http.get(this.url + '/genre/' + genre)
  }

  getGenres() {
    return this.http.get(this.url + '/genre-list')
  }
}
