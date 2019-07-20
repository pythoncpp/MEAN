import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './user/components/signin/signin.component';
import { SignupComponent } from './user/components/signup/signup.component';
import { ActivationComponent } from './user/components/activation/activation.component';
import { UserService } from './user/services/user.service';

import { ToastrModule } from 'ngx-toastr'
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './shared/home/home.component';
import { MovieService } from './movie/services/movie.service';
import { MovieListComponent } from './movie/components/list/movie.list.component';
import { ShortDescriptionPipe } from './shared/short.description.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ActivationComponent,
    NavigationComponent,
    SidebarComponent,
    HomeComponent,
    MovieListComponent,
    ShortDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
