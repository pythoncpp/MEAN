import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../classes/movie';
import { MovieService } from '../../services/movie.service';
import { FilterState } from '../../services/filter.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie.list.component.html',
  styleUrls: ['./movie.list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = []

  constructor(
    private router: Router,
    private service: MovieService
  ) { }

  ngOnInit() {
    this.loadMovies(-1)

    // subscribing for the new genreId
    this.service.subject.subscribe((state: FilterState) => {
      console.log('new state is available: ' + state.genreId)
      this.loadMovies(state.genreId)
    })
  }

  onDetails(movie) {
    this.router.navigate(['/movie/details'], { queryParams: { id: movie.id } })
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
