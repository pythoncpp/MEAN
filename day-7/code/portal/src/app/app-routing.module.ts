import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './user/components/signin/signin.component';
import { ActivationComponent } from './user/components/activation/activation.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-activate', component: ActivationComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
