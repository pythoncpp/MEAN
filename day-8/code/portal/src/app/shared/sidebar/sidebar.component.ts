import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../movie/services/movie.service';
import { Genre } from 'src/app/movie/classes/genre';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  genres: Genre[] = []
  selectedGenre = -1
  @Output() filterMovies = new EventEmitter()

  constructor(
    private service: MovieService
  ) { }

  ngOnInit() {
    this.loadGenres()
  }

  onSelectGenre(genre) {
    console.log('found new genreId: ' + genre.id)
    this.selectedGenre = genre.id
    this.filterMovies.emit(genre.id)
    this.service.filterMovies(genre.id)
  }

  loadGenres() {
    this.service
      .getGenres()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          // add a dummy genre to select all the movies
          this.genres.push({
            id: -1,
            title: 'All Movies',
            description: ''
          })

          result['data'].forEach(genre => {
            this.genres.push(genre)
          })
        }
      })
  }
}
