import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directorio-home',
  templateUrl: './directorio-home.component.html',
  imports: [
    CommonModule, NgFor, NgStyle
  ],
  styleUrls: ['./directorio-home.component.css']
})
export class DirectorioHomeComponent implements OnInit {

  directorios!: Directorio[]|null;

  error!: string;

  doctores!: Directorio[]|null;

  private http!: HttpClient;

  ServerUrl = environment.baseUrl;

  p: Number = 1;
  count: Number = 5;

  constructor(public directorioService: DirectorioService,){
    
  }

  
  ngOnInit() {

    this.directorioService.getDirectorios().subscribe(
      (res:any) => this.directorios = res.data,
      error => this.error = error
    );

    
  }



}
