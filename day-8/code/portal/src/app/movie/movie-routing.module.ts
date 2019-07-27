import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/list/movie.list.component';
import { MovieDetailsComponent } from './components/details/movie.details.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'list', component: MovieListComponent },
  { path: 'details', component: MovieDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class MovieRoutingModule { }
