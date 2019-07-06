import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { ThirdComponent } from './third/third.component'
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component'

// decorator
@NgModule({
  declarations: [
    // collection of components, pipes etc
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent
  ],
  imports: [
    // collection of modules required to run the application
    BrowserModule
  ],
  providers: [
    // collection of services
  ],
  bootstrap: [
    // the list of classes/components get loaded
    AppComponent
  ]
})
export class AppModule { }
