import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Member } from './member';
import { MEMBERS } from './members';
import { MessageService } from './message.service';

@Injectable()
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: fetched members');
    return of(MEMBERS);
  }

}
