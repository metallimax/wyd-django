import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './members';

@Injectable()
export class MemberService {

  constructor() { }

  getMembers(): Member[] {
   return MEMBERS;
  }

}
