import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { KeysPipe } from '../../pipes/keys.pipe';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  imports: [
    CommonModule, NgFor, KeysPipe, NgxPaginationModule, RouterModule, NgIf,
    LoadingComponent
  ],
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


  title = 'Tips para los pacientes y la comunidad.';
  pacientes!: Paciente[];
  error!: {};
  isLoading: boolean = false;
  private http: HttpClient;

  ServerUrl = environment.baseUrl;

   total!: number;
   p!: number;
  count!:  4;


  constructor(
    private blogService: PacienteService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    //this.titleService.setTitle(this.title);
    this.isLoading = true;
    this.blogService.getPacientes().subscribe(
      (res:any) => {
        this.pacientes = res.pacientes.data
        this.total = res.total;
        this.isLoading = false;
      },
      error => this.error = error
    );
    window.scrollTo(0,0);
  }
}
