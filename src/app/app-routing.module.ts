import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MessageListComponent } from './messages/message-list/message-list.component';


const routes: Routes = [
  {
    path:'customers',
    // loadChildren:'./customers/customers.module#CustormersModule',
    component:CustomerListComponent
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
