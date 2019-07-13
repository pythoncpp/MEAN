import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie/list/movie.list.component';
import { RatingComponent } from './shared/rating/rating.component';
import { MovieAddComponent } from './movie/add/movie.add.component';
import { from } from 'rxjs';
import { UserAddComponent } from './user/add/user.add.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    RatingComponent,
    MovieAddComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
