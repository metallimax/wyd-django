import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../members';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: MEMBERS;

  selectedMember: Member;

  constructor() { }

  ngOnInit() {
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
