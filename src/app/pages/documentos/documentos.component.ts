import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DocumentosSharedComponent } from '../../shared/documentos-shared/documentos-shared.component';
import { GalleriaComponent } from '../../shared/galleria/galleria.component';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  imports: [
    CommonModule,
    DocumentosSharedComponent,
    GalleriaComponent 
  ],
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
