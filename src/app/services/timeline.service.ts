import { Injectable } from '@angular/core';
import { Timeline } from '../models/timeline';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTimelines() {
    return this.http.get<Timeline>(this.serverUrl + 'timelines').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedTimelines() {
    return this.http.get<Timeline>(this.serverUrl + 'timelines/featured_timelines/').pipe(
      catchError(this.handleError)
    );
  }

  getTimeline(id: number) {
    return this.http.get<Timeline>(this.serverUrl + 'timelines/show/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentTimelines() {
    return this.http.get<Timeline>(this.serverUrl + 'timeline/recent_timelines/').pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
