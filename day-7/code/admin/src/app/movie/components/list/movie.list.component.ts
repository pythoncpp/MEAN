import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private service: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadMovies()
  }

  onDelete(movie) {
    if (confirm('Are you sure you want to delete this movie?')) {
      this.service
        .deleteMovie(movie.id)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] === 'success') {
            alert('deleted movie')
            this.loadMovies()
          } else {
            alert('error while deleting movie')
          }
        })
    }
  }

  loadMovies() {
    this.service
      .getMovies()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          this.movies = result['data']
        }
      })
  }

  onAdd() {
    this.router.navigate(['/movie-add'])
  }
}
