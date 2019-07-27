import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './components/order.list.component';
import { OrderDetailsComponent } from './components/order.deatils.component';

const routes: Routes = [
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-details', component: OrderDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class OrderRoutingModule { }
