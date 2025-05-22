import { Component, OnInit } from '@angular/core';
import {ConfiguracionService} from '../../services/configuracion.service';
import {Configuracion} from '../../models/configuracion';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [
    CommonModule, NgFor
  ],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();

  configuracions!: Configuracion[];

  error!: string;

  order = "create_at";
ascending = true;

  constructor(public configuracionService: ConfiguracionService,
    ) {

   }

  ngOnInit() {

    this.configuracionService.getConfiguracions().subscribe(
      (res:any) => this.configuracions = res.settings.data,
      error => this.error = error
    );

  }

}
