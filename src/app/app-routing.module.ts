import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageNewComponent } from './messages/message-new/message-new.component';
import {CustomerNewComponent} from './customers/customer-new/customer-new.component';

const routes: Routes = [
  {
    path:'customers',
    // loadChildren:'./customers/customers.module#CustormersModule',
    component:CustomerListComponent
  },
  {
    path:'customers/new',
    // loadChildren:'./customers/customers.module#CustormersModule',
    component:CustomerNewComponent
  },
  {
    path:'orders',
    // loadChildren:'./orders/orders.module#OrdersModule',
    component:OrderListComponent
  },
  {
    path:'messages',
    // loadChildren:'./messages/messages.module#MessagesModule',
    component:MessageListComponent
  },
  {
    path:'messages/new',
    // loadChildren:'./messages/messages.module#MessagesModule',
    component:MessageNewComponent
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
