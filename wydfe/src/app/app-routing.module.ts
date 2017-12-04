import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { SongsComponent } from './songs/songs.component';
import { RecordsComponent } from './records/records.component';
import { ConcertsComponent } from './concerts/concerts.component';

const routes: Routes = [
  { path: 'members', component: MembersComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'concerts', component: ConcertsComponent },
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
