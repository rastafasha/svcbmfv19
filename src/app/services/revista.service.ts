import { Injectable } from '@angular/core';
import { Revista } from '../models/revista';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RevistaService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getRevistas() {
    return this.http.get<Revista>(this.ServerUrl + 'revistas');
  }


  getRevista(id: number) {
    return this.http.get<Revista>(this.ServerUrl + 'revistas/show/' + id);
  }


}
