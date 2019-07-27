import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Subject } from 'rxjs'
import { FilterState } from './filter.state';

@Injectable()
export class MovieService {

  subject = new Subject<FilterState>()

  url = 'http://localhost:4000/portal/movie'

  constructor(
    private http: Http) { }

  filterMovies(genreId: number) {
    console.log('MovieServie: sending the new state to all subscribers')
    const state: FilterState = { genreId: genreId }
    this.subject.next(state)
  }

  getMovies(genre: number) {
    if (genre === -1) {
      // get all the movies
      return this.http.get(this.url)
    }

    return this.http.get(this.url + '/genre/' + genre)
  }

  getMovieDetails(id: number) {
    return this.http.get(this.url + '/' + id)
  }

  getGenres() {
    return this.http.get(this.url + '/genre-list')
  }
}
