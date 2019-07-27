import { NgModule } from '@angular/core';
import { OrderListComponent } from './components/order.list.component';
import { OrderDetailsComponent } from './components/order.deatils.component';
import { OrderRoutingModule } from './order-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [],
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ],
  providers: [],
})
export class OrderModule { }
