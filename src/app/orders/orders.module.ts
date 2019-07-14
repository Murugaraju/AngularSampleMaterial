import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
//material

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:[OrdersModule],
})
export class OrdersModule { }
