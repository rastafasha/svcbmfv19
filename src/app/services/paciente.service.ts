import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPacientes() {
    return this.http.get<Paciente>(this.serverUrl + 'areapaciente/').pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedPacientes() {
    return this.http.get<Paciente>(this.serverUrl + 'areapaciente/destacados/').pipe(
      catchError(this.handleError)
    );
  }

  getPaciente(id: number) {
    return this.http.get<Paciente>(this.serverUrl + 'areapaciente/show/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }

  getRecentPacientes() {
    return this.http.get<Paciente>(this.serverUrl + 'areapaciente/recientes/').pipe(
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
