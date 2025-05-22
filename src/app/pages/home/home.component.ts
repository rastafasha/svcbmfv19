import { Component, OnInit } from '@angular/core';
import {AliadoService} from '../../services/aliados.service';
import {Aliado} from '../../models/aliados';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from '../../shared/slider/slider.component';
import { BanershomeComponent } from '../../congresoforms/banershome/banershome.component';
import { BlogHomeComponent } from '../../shared/blog-home/blog-home.component';
import { BancuadradoComponent } from '../../shared/banner/bancuadrado/bancuadrado.component';
import { BanhorizontalComponent } from '../../shared/banner/banhorizontal/banhorizontal.component';
import { BanverticalComponent } from '../../shared/banner/banvertical/banvertical.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    CommonModule, HttpClientModule, SliderComponent,
    BlogHomeComponent, BancuadradoComponent,
    BanhorizontalComponent,BanverticalComponent
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aliados!: Aliado[]|null;

  error!: string;

  constructor(public aliadoService: AliadoService) { }

  ngOnInit() {
    window.scrollTo(0,0);
    
    this.aliadoService.getAliados().subscribe(
      (res:any) => this.aliados = res.aliados.data,
      error => this.error = error
    );
  }

  

}
