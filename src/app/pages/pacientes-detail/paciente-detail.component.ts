import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PacienteRecentComponent } from '../index.paginas';
import { BanverticalComponent } from '../../shared/banner/banvertical/banvertical.component';
import { CommonModule } from '@angular/common';
import { BancuadradoComponent } from '../../shared/banner/bancuadrado/bancuadrado.component';


@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  imports: [
    CommonModule,PacienteRecentComponent, BanverticalComponent, BancuadradoComponent

  ],
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  paciente$!: Observable<Paciente>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.paciente$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const idParam = params.get('id');
        if (idParam === null) {
          throw new Error('ID parameter is missing');
        }
        return this.pacienteService.getPaciente(+idParam);
      })
    );
    window.scrollTo(0,0);

    //this.titleService.setTitle('SVCBMF - Blog Detail');
  }

}
