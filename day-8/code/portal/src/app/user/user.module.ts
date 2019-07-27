import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ActivationComponent } from './components/activation/activation.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [],
  declarations: [
    SigninComponent,
    SignupComponent,
    ActivationComponent
  ],
  providers: [],
})
export class UserModule { }
