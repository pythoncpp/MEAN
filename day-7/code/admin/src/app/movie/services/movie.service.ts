import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class MovieService {

  url = 'http://localhost:4000/admin/movie'

  constructor(
    private http: Http) { }

  deleteMovie(id: number) {
    return this.http.delete(this.url + '/' + id)
  }

  getGenres() {
    return this.http.get(this.url + '/genre')
  }

  getMovies() {
    return this.http.get(this.url)
  }

  addMovie(title: string, country: string, description: string,
    thumbnail: any, videoUrl: string, producer: string, cast: string,
    genre: number, year: number, duration: string, rating: number) {

    const body = new FormData()
    body.append('title', title)
    body.append('country', country)
    body.append('description', description)
    body.append('thumbnail', thumbnail) // multi form
    body.append('videoUrl', videoUrl)
    body.append('producer', producer)
    body.append('cast', cast)
    body.append('genreId', '' + genre)
    body.append('year', '' + year)
    body.append('duration', duration)
    body.append('rating', rating)

    return this.http.post(this.url, body)
  }
}
