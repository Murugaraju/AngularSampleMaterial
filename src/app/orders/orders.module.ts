import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
//material

import {MatTabsModule} from '@angular/material/tabs';
import { OrderNewComponent } from './order-new/order-new.component';


@NgModule({
  declarations: [OrderListComponent, OrderNewComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ],
  exports:[OrdersModule],
})
export class OrdersModule { }
