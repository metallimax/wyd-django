import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  selectedMember: Member;

  constructor(private memberService: MemberService) { }

  isActive(member: Member): boolean {
    return member.member_until == null;
  }
  getActiveMembers(): Member[] {
    return this.members.filter(this.isActive);
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

  ngOnInit() {
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
