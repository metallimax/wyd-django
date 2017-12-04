import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MemberService } from './member.service';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './message.service';

import { AppRoutingModule } from './app-routing.module';
import { SongsComponent } from './songs/songs.component';
import { SongService } from './song.service';
import { UrlService } from './url.service';
import { ConcertService } from './concert.service';
import { RecordService } from './record.service';
import { RecordsComponent } from './records/records.component';
import { ConcertsComponent } from './concerts/concerts.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MessagesComponent,
    SongsComponent,
    RecordsComponent,
    ConcertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemberService, MessageService, SongService, UrlService, ConcertService, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
