import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resena-historica',
  templateUrl: './resena-historica.component.html',
  styleUrls: ['./resena-historica.component.css']
})
export class ResenaHistoricaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,0);
  }

}
