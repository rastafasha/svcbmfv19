import { Component, OnInit } from '@angular/core';
import { GaleriaService } from '../../services/galeria.service';
import { Galeria } from '../../models/galeria';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeysPipe } from '../../pipes/keys.pipe';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  imports: [
    CommonModule, RouterModule, NgFor, NgxPaginationModule,NgFor,
    LoadingComponent, KeysPipe
  ],
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {

  galerias!: Galeria[];

  error!: string;

  private http!: HttpClient;

  ServerUrl = environment.baseUrl;
  isLoading: boolean = false;
  collection = [];
  total!: number;
  p!: number;
  count!:  4;

  

  constructor(public galeriaService: GaleriaService,){
  }

  
  ngOnInit() {
    window.scrollTo(0,0);
    this.isLoading = true;
    this.galeriaService.getGalerias().subscribe(
      (res:any) => {
        this.galerias = res.galerias.data;
        this.total = res.total;
        this.isLoading = false;
      },
      error => this.error = error
    );

    
  }

}
