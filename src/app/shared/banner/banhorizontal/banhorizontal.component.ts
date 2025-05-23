import { Component, OnInit } from '@angular/core';
import { BanhorizontalService } from '../../../services/adsHorizontal.service';
import { Banhorizontal } from '../../../models/ads-horizontal';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banhorizontal',
  templateUrl: './banhorizontal.component.html',
  imports: [
    CommonModule, NgFor, CarouselModule
  ],
  styleUrls: ['./banhorizontal.component.css']
})
export class BanhorizontalComponent implements OnInit {

  banhorizontals!: Banhorizontal[];

  error!: string;

  private http!: HttpClient;

  ServerUrl = environment.baseUrl;
  p: Number = 1;
  count: Number = 5;

  banH: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    animateOut: 'fadeOut',
    navSpeed: 15000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(public banhorizontalService: BanhorizontalService,){
    
  }

  
  ngOnInit() {

    this.banhorizontalService.getBanhorizontalsActivos().subscribe(
      (res:any) => this.banhorizontals = res.banhorizontals.data,
      error => this.error = error
    );

    
  }

}
