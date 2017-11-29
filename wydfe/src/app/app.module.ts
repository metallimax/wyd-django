import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MemberService } from './member.service';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './message.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemberService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
