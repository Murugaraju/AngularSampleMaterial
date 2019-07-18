import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { RepDailogComponent } from './rep-dailog/rep-dailog.component';

// import { CustomerInfoComponent } from './customoers-list/customer-info/customer-info.component';



@NgModule({
  declarations: [CustomerListComponent, CustomerNewComponent, RepDailogComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
