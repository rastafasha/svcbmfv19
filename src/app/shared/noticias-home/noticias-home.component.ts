import { Component, OnInit } from '@angular/core';
import { NewsInstagram } from '../../models/newsInstagram';
import { NewsInstagramService } from '../../services/newsInstagram.service';
import { CommonModule, NgFor } from '@angular/common';
import { BancuadradoComponent } from '../banner/bancuadrado/bancuadrado.component';
@Component({
  selector: 'app-noticias-home',
  templateUrl: './noticias-home.component.html',
  imports: [
    CommonModule, NgFor, BancuadradoComponent
  ],
  styles: []
})
export class NoticiasHomeComponent implements OnInit {

  newsInstagrams!: NewsInstagram[];

  error!: string;

  constructor(public newsInstagramService: NewsInstagramService) {

   }

  ngOnInit() {

    this.newsInstagramService.getNewsIntagrams().subscribe(
      (res:any) => this.newsInstagrams = res.data,
      error => this.error = error
    );

  }

}
