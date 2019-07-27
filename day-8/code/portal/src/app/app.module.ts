import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/services/user.service';

import { ToastrModule } from 'ngx-toastr'
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './shared/home/home.component';
import { MovieService } from './movie/services/movie.service';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './shared/auth/auth.component';
import { CartService } from './movie/services/cart.srevice';
import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './shared/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,

    NavigationComponent,
    SidebarComponent,
    HomeComponent,
    AuthComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgbModalModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CartService,
    UserService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
