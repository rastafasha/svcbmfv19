import { Component, OnInit } from '@angular/core';
import { DocumentoService } from '../../services/documento.service';
import { Documento } from '../../models/documentos';
import { environment } from '../../../environments/environment';
import { HttpClient,  } from '@angular/common/http';
import { CommonModule, NgFor, NgIf, } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-documentos-shared',
  templateUrl: './documentos-shared.component.html',
  imports: [
    CommonModule, NgFor, NgIf, LoadingComponent, NgxPaginationModule,
  ],
  styleUrls: ['./documentos-shared.component.css']
})
export class DocumentosSharedComponent implements OnInit {

  documentos!: Documento[]|null;

  error!: string;

  private http!: HttpClient;

  ServerUrl = environment.baseUrl;
  isLoading: boolean = false;
  total!: number;
  p!: number;
  count!:  4;


  constructor(public documentoService: DocumentoService,){
    
  }

  
  ngOnInit() {
    window.scrollTo(0,0);
    this.isLoading = true;
    this.documentoService.getDocumentos().subscribe(
      (resp:any) => {
        this.documentos = resp.documentos.data
        this.total = resp.total;
        this.isLoading = false;
      },
      error => this.error = error
    );

    
  }

}
