import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie.list.component.html',
  styleUrls: ['./movie.list.component.css']
})

export class MovieListComponent implements OnInit {
  movies = [
    { id: 1, title: 'Captain Marvel', genres: 'adventure 3D', price: 100, duration: '2h 30min', rating: 3 },
    { id: 2, title: 'Ant Man', genres: 'adventure 3D', price: 200, duration: '2h 10min', rating: 1 },
    { id: 3, title: 'Avtar', genres: 'adventure drama 3D', price: 150, duration: '3h 30min', rating: 5 },
    { id: 4, title: 'Toy Story', genres: 'kids 3D', price: 120, duration: '2h 10min', rating: 4 }
  ]

  constructor() { }

  ngOnInit() { }

  onChange(values, movie) {
    console.log('new rating: ' + values.new + ' for : ' + movie.title)
  }
}
