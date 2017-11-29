import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'songs', component: SongsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
