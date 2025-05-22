import { Injectable } from '@angular/core';
import { Documento } from '../models/documentos';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getDocumentos() {
    return this.http.get<Documento>(this.ServerUrl + 'documento/');
  }


  getDocumento(id: number) {
    return this.http.get<Documento>(this.ServerUrl + 'documento/show/' + id);
  }


}
