import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [
    CommonModule, NgFor, EscapeHtmlPipe
    ],
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  directorios!: Directorio;
  error!: string;

  doctores!: Directorio[];

  constructor(private directorioService: DirectorioService) { }

  ngOnInit() {
    this.directorioService.getDirectorios().subscribe(
      (res:any) => this.directorios = res.data,
      error => this.error = error
    );
  }

}
