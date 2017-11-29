import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MemberService } from './member.service';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MemberService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
