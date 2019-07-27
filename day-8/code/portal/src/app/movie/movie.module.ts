import { NgModule } from '@angular/core';
import { MovieListComponent } from './components/list/movie.list.component';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { ShortDescriptionPipe } from '../shared/short.description.pipe';
import { MovieDetailsComponent } from './components/details/movie.details.component';


@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports: [],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    ShortDescriptionPipe
  ],
  providers: [
  ],
})
export class MovieModule { }
