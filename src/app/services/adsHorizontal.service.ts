import { Injectable } from '@angular/core';
import { Banhorizontal } from '../models/ads-horizontal';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanhorizontalService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getBanhorizontals() {
    return this.http.get<Banhorizontal>(this.ServerUrl + 'banhorizontal');
  }
  getBanhorizontalsActivos() {
    return this.http.get<Banhorizontal>(this.ServerUrl + 'banhorizontal/activos');
  }


  getBanhorizontal(id: number) {
    return this.http.get<Banhorizontal>(this.ServerUrl + 'banhorizontal/show/' + id);
  }


}
