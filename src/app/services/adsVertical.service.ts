import { Injectable } from '@angular/core';
import { Banvertical } from '../models/ads-vertical';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BanverticalService {

  ServerUrl = environment.baseUrl;
  errorData!: {};

  private http: HttpClient;


  constructor(handler: HttpBackend) {
      this.http = new HttpClient(handler);
  }

  getBanverticals() {
    return this.http.get<Banvertical>(this.ServerUrl + 'banvertical/');
  }
  getBanverticalsActivos() {
    return this.http.get<Banvertical>(this.ServerUrl + 'banvertical/activos');
  }

  getBanvertical(id: number) {
    return this.http.get<Banvertical>(this.ServerUrl + 'banvertical/show/' + id);
  }


}
