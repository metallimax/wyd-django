import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';
import { UrlService } from '../url.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[];

  selectedMember: Member;

  active: boolean;

  constructor(private memberService: MemberService, public urlService: UrlService) { }

  isActive(member: Member): boolean {
    return member.member_until == null;
  }

  isInactive(member: Member): boolean {
    return member.member_until != null;
  }

  getActiveMembers(active: boolean): Member[] {
    if(!active) {
      return this.members.filter(this.isInactive);
    }
    return this.members.filter(this.isActive);
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }

  ngOnInit() {
    this.getMembers();
    this.active = true;
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

}
