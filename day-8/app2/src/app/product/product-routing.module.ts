import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product.list.component';
import { ProductDetailsComponent } from './components/product.details.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'details', component: ProductDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class ProductRoutingModule { }
