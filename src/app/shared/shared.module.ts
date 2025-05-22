import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// paginacion
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
]
})
export class SharedModule { }
