import { Component, OnInit } from '@angular/core';
import { Regional } from '../../models/dirregional';
import { DirregionalService } from '../../services/dirregional.service';

import { HttpClient, HttpBackend } from '@angular/common/http';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BancuadradoComponent } from '../../shared/banner/bancuadrado/bancuadrado.component';
import { BanverticalComponent } from '../../shared/banner/banvertical/banvertical.component';
import { LoadingComponent } from '../../shared/loading/loading.component';


@Component({
  selector: 'app-junta-regional',
  templateUrl: './junta-regional.component.html',
  imports: [
    CommonModule,NgFor, BancuadradoComponent, BanverticalComponent, NgIf,LoadingComponent
  ],
  styleUrls: ['./junta-regional.component.css']
})
export class JuntaRegionalComponent implements OnInit {

  title = 'Juntas Directivas de los Capítulos de la Sociedad Venezolana de Cirugía Buco-Maxilofacial';
  regionales!: Regional[]|null;
  error!: {};

  isLoading: boolean = false;
  private http!: HttpClient;

  constructor(
    private dirregionalService: DirregionalService,

    ) {
   }

  ngOnInit() {
    window.scrollTo(0,0);
    this.isLoading = true;
    this.dirregionalService.getDirRegionals().subscribe(
      (res:any) => {
        this.regionales = res.dirregionals.data
        this.isLoading = false;
      },
      error => this.error = error
      );
      console.log(this.regionales);
  }

}
