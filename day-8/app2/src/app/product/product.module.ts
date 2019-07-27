import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product.list.component';
import { ProductDetailsComponent } from './components/product.details.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    ProductRoutingModule
  ],
  exports: [],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  providers: [],
})
export class ProductModule { }
