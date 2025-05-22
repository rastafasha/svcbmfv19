import { Injectable } from '@angular/core';
import { Fotoceo } from '../models/fotoceo';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FotoceoService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getFotoceos() {
    return this.http.get<Fotoceo>(this.ServerUrl + 'fotoceo/');
  }


  getFotoceo(id: number) {
    return this.http.get<Fotoceo>(this.ServerUrl + 'fotoceo/show/' + id);
  }


}
