import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from '../models/estados';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  private estadosUrl = 'assets/data/estados.json';

  constructor(private http: HttpClient) { }

  getEstados(): Observable<Estado[]> {
    return this.http.get<Estado[]>(this.estadosUrl);
  }
}
