import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Material section  

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//roting
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import {CustomerInfoComponent} from './customers/customer-list/customer-info/customer-info.component'
import {MessageNewComponent} from './messages/message-new/message-new.component';
// import {OrdersModule} from '.orders/orders.module';
import {MaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    OrderListComponent,
    MessageListComponent,
    CustomerInfoComponent,
    MessageNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FormsModule, 
    ReactiveFormsModule,  
    MatToolbarModule,
    MatMenuModule,
    // OrdersModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
