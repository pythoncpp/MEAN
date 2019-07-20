import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MovieAddComponent } from './movie/components/add/movie.add.component';
import { MovieListComponent } from './movie/components/list/movie.list.component';
import { routes } from './routes';
import { MovieService } from './movie/services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
