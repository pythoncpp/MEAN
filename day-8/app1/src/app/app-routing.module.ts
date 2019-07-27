import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/components/movie.list.component';
import { HomeComponent } from './home/home.component';
import { TopMoviesComponent } from './movie/components/top.movies.component';
import { OrderListComponent } from './order/components/order.list.component';
import { OrderDetailsComponent } from './order/components/order.deatils.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'movie',
        loadChildren: './movie/movie.module#MovieModule'
      },
      {
        path: 'order',
        loadChildren: './order/order.module#OrderModule'
      }
    ]
  },
  // { path: 'movie-list', component: MovieListComponent },
  // { path: 'movie-top', component: TopMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
