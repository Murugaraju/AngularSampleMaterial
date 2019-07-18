import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

import { RepDialogComponent } from './rep-dialog/rep-dialog.component';




@NgModule({
  declarations: [CustomerListComponent, CustomerNewComponent, RepDialogComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
