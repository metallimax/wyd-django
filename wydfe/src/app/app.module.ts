import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MemberService } from './member.service';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
