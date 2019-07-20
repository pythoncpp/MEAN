import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Genre } from '../../classes/genre';
import { readdir, read } from 'fs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie.add.component.html',
  styleUrls: ['./movie.add.component.css']
})

export class MovieAddComponent implements OnInit {
  genres: Genre[] = []
  thumbnail: any
  imageData: any

  title = ''
  country = 'india'
  videoUrl = ''
  producer = ''
  cast = ''
  genre = 1
  duration = ''
  rating = 0
  year = 0
  description = ''

  constructor(
    private router: Router,
    private service: MovieService) { }

  ngOnInit() {
    this.getGenres()
  }

  onSelectThumbnail(event) {
    this.thumbnail = event.target.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      this.imageData = reader.result
    }
    reader.readAsDataURL(this.thumbnail)
  }

  getGenres() {
    this.service
      .getGenres()
      .subscribe(response => {
        const result = response.json()
        if (result['status'] === 'success') {
          this.genres = result['data']
        }
      })
  }

  onAdd() {
    if (this.title.length === 0) {
      alert('enter title')
    } else {
      this.service
        .addMovie(this.title, this.country, this.description, this.thumbnail,
            this.videoUrl, this.producer, this.cast, this.genre,
            this.year, this.duration, this.rating)
        .subscribe(response => {
          const result = response.json()
          if (result['status'] === 'success')  {
            alert('successfully  added a new movie')
            this.router.navigate(['/movie-list'])
          }
        })
    }
  }

  onCancel() {
    this.router.navigate(['/movie-list'])
  }
}
