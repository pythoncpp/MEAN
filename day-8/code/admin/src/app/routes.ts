import { Route } from '@angular/router'
import { MovieListComponent } from './movie/components/list/movie.list.component';
import { MovieAddComponent } from './movie/components/add/movie.add.component';

export const routes: Route[] = [
  // default route
  { path: '', component: MovieListComponent },

  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-add', component: MovieAddComponent }
]

