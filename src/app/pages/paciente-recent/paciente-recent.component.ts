import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-paciente-recent',
  templateUrl: './paciente-recent.component.html',
  imports: [
    CommonModule,
    NgFor, RouterModule
  ],
  styleUrls: ['./paciente-recent.component.css']
})
export class PacienteRecentComponent implements OnInit {

  pacientes!: Paciente[]|null;
  error!: {};

  

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.getRecentPacientes().subscribe(
      (res:any) => {
        this.pacientes = res.pacienterecientes.data;
      },
      error => this.error = error
    );
  }

}
