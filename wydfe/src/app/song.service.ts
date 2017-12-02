import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Song } from './song';

import { MessageService } from './message.service';
import { UrlService } from './url.service';

@Injectable()
export class SongService {

  constructor(private http: HttpClient, private messageService: MessageService, private urlService: UrlService) { }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.urlService.getWebserviceUrl('songs'))
      .pipe(catchError(this.handleError('getSongs', [])));
  }

  private log(message: string) {
    this.messageService.add('SongService: ' + message);
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
