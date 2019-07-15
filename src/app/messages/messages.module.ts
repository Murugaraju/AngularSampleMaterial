import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';



@NgModule({
  declarations: [MessageListComponent, MessageNewComponent],
  imports: [
    CommonModule
  ]
})
export class MessagesModule { }
