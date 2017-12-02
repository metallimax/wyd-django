import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Member } from './member';

import { MessageService } from './message.service';
import { UrlService } from './url.service';

@Injectable()
export class MemberService {

  constructor(private http: HttpClient, private messageService: MessageService, private urlService: UrlService) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.urlService.getWebserviceUrl('members'))
      .pipe(catchError(this.handleError('getMembers', [])));
  }

  private log(message: string) {
    this.messageService.add('MemberService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
