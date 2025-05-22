import { Injectable } from '@angular/core';
import { Galeria } from '../models/galeria';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getGalerias() {
    return this.http.get<Galeria>(this.ServerUrl + 'galeria/');
  }


  getGaleria(id: number) {
    return this.http.get<Galeria>(this.ServerUrl + 'galeria/show/' + id);
  }


}
