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
  selector: 'app-pacientetipd',
  imports: [
    CommonModule,PacienteRecentComponent, BanverticalComponent, BancuadradoComponent

  ],
  templateUrl: './pacientetipd.component.html',
  styleUrl: './pacientetipd.component.css'
})
export class PacientetipdComponent {

    // paciente!: Observable<Paciente>;
    paciente!: Paciente;
    slug:any;
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private pacienteService: PacienteService,
      private titleService: Title
    ) { }
  
    ngOnInit() {

const slug = this.activatedRoute.snapshot.paramMap.get('slug');
      
          this.slug = slug;
          this.pacienteService.getPacientesSlug(this.slug).subscribe(
            (res:any) => {
              this.paciente = res.paciente;
              // console.log(this.paciente);
            }
          );

      window.scrollTo(0,0);
  
      //this.titleService.setTitle('SVCBMF - Blog Detail');
    }
  
  
}
