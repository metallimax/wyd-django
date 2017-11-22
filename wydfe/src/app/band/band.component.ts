import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../band';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
  members: MEMBERS;

  selectedMember: Member;

  constructor() { }

  ngOnInit() {
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
