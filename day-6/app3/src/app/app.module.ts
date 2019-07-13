import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/list/product.list.component';
import { ProductService } from './product/services/product.service';
import { HttpModule } from '@angular/http';
import { ProductAddComponent } from './product/add/product.add.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-add', component: ProductAddComponent },

      // default
      { path: '', component: ProductListComponent },

      // error
      { path: '**', component: ErrorComponent },
    ])
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
