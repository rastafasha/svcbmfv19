import { Injectable } from '@angular/core';
import { Formacion } from '../models/formacion';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getFormacions() {
    return this.http.get<Formacion>(this.serverUrl + 'formacions/').pipe(
      catchError(this.handleError)
    );
  }

  getFormacion(id: number) {
    return this.http.get<Formacion>(this.serverUrl + 'formacions/show/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentFormacions() {
    return this.http.get<Formacion>(this.serverUrl + 'formacions/recent_formacions/').pipe(
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
