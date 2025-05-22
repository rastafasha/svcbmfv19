import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanershomeComponent } from './banershome/banershome.component';
import { CongresoFormComponent } from './congreso-form/congreso-form.component';
import { CursoPrecongreso1Component } from './curso-precongreso1/curso-precongreso1.component';
import { CursoPrecongreso2Component } from './curso-precongreso2/curso-precongreso2.component';
import { CursoCongreso1Component } from './curso-congreso1/curso-congreso1.component';
import { PagoAnualidadComponent } from './pago-anualidad/pago-anualidad.component';



@NgModule({
  declarations: [
    BanershomeComponent,
    CongresoFormComponent,
    CursoPrecongreso1Component,
    CursoPrecongreso2Component,
    CursoCongreso1Component,
    PagoAnualidadComponent
  ],
  exports: [
    BanershomeComponent,
    CongresoFormComponent,
    CursoPrecongreso1Component,
    CursoPrecongreso2Component,
    CursoCongreso1Component,
    PagoAnualidadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CongresoformsModule { }
