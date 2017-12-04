import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Concert } from './concert';

import { MessageService } from './message.service';
import { UrlService } from './url.service';


@Injectable()
export class ConcertService {

  constructor(private http: HttpClient, private messageService: MessageService, private urlService: UrlService) { }

  getConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>(this.urlService.getWebserviceUrl('concerts'))
      .pipe(catchError(this.handleError('getConcerts', [])));
  }

  private log(message: string) {
    this.messageService.add('ConcertService: ' + message);
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

