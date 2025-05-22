import { inject, Injectable } from '@angular/core';
import { Aliado } from '../models/aliados';
import { HttpBackend, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AliadoService {

  serverUrl = environment.baseUrl;

  // private http: HttpClient;
  private http = inject(HttpClient);


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getAliados() {
    return this.http.get<Aliado>(this.serverUrl + 'aliados/').pipe(
      catchError(this.handleError)
    );
  }


  getAliado(id: number) {
    return this.http.get<Aliado>(this.serverUrl + 'aliados/swow/' + id)
    .pipe(
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
