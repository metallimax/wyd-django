import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Record } from './record';

import { MessageService } from './message.service';
import { UrlService } from './url.service';


@Injectable()
export class RecordService {

  constructor(private http: HttpClient, private messageService: MessageService, private urlService: UrlService) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.urlService.getWebserviceUrl('records'))
      .pipe(catchError(this.handleError('getRecords', [])));
  }

  private log(message: string) {
    this.messageService.add('RecordService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
