import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie.list.component.html',
  styleUrls: ['./movie.list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = []

  constructor(
    private service: MovieService
  ) { }

  ngOnInit() {
    this.loadMovies(-1)
  }

  public loadMovies(selectedGenre) {
    console.log('loading movies')
    this.service
      .getMovies(selectedGenre)
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          this.movies = result['data']
        }
      })
  }
}
