import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieListComponent } from '../../movie/components/list/movie.list.component';

@Component({
  selector: 'app-shared-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onFilterMovies(genreId: number) {
  }
}
