import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { AuthComponent } from './shared/auth/auth.component';
import { UserService } from './user/services/user.service';
import { CartComponent } from './shared/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UserService],
    children: [
      {
        path: 'movie',
        loadChildren: './movie/movie.module#MovieModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
