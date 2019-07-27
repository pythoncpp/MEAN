import { NgModule } from '@angular/core';
import { MovieListComponent } from './components/movie.list.component';
import { TopMoviesComponent } from './components/top.movies.component';
import { MovieRoutingModule } from './movie-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports: [],
  declarations: [
    MovieListComponent,
    TopMoviesComponent
  ],
  providers: [],
})
export class MovieModule { }
