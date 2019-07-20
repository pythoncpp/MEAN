import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from '../../movie/components/list/movie.list.component';

@Component({
  selector: 'app-shared-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // return an object of type MovieListComponent
  @ViewChild(MovieListComponent) movieListComponent: MovieListComponent

  constructor() { }

  ngOnInit() { }

  onFilterMovies(genreId: number) {
    console.log(this.movieListComponent)

    this.movieListComponent.loadMovies(genreId)
  }
}
