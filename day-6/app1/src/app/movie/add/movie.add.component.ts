import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie.add.component.html',
  styleUrls: ['./movie.add.component.css']
})

export class MovieAddComponent implements OnInit {

  title = 'test  movie'
  description = 'test description'
  genres = 'test genres'
  duration = ''
  rating = 0

  constructor() { }

  ngOnInit() { }

  onAdd() {
    console.log(`title: ${this.title}`)
    console.log(`description: ${this.description}`)
    console.log(`genres: ${this.genres}`)
    console.log(`duration: ${this.duration}`)
  }

  onCancel() {
    this.title = ''
    this.description = ''
    this.duration = ''
    this.genres = ''
    this.rating = 0
  }
}
