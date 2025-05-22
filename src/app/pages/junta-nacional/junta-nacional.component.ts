import { Component, OnInit } from '@angular/core';
import { Ceo } from '../../models/ceo';
import { CeoService } from '../../services/ceo.service';

import { Fotoceo } from '../../models/fotoceo';
import { FotoceoService } from '../../services/fotoseo.service';

import { HttpClient, HttpBackend } from '@angular/common/http';
import { CommonModule, NgFor, NgIf, NgStyle } from '@angular/common';
import { LoadingComponent } from '../../shared/loading/loading.component';



@Component({
  selector: 'app-junta-nacional',
  templateUrl: './junta-nacional.component.html',
  imports: [
    CommonModule,
    NgStyle, NgFor, NgIf, LoadingComponent
  ],
  styleUrls: ['./junta-nacional.component.css']
})
export class JuntaNacionalComponent implements OnInit {


  ceos!: Ceo[]|null;
  fotoceos!: Fotoceo[]|null;
  error!: {};
  isLoading: boolean = false;

  private http!: HttpClient;

  constructor(
    private ceoService: CeoService,
    private fotoceoService: FotoceoService,

    ) {
   }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadCeo();
    this.loadFotoCeo();
  }

  loadCeo(){
    this.isLoading = true;
    this.ceoService.getCeos().subscribe(
      (res:any) => {
        this.ceos = res.ceos.data
        this.isLoading = false;
      },
      error => this.error = error
      );
  }
  loadFotoCeo(){
    this.isLoading = true;
    this.fotoceoService.getFotoceos().subscribe(
      (res:any) => {
        this.fotoceos = res.fotoceos.data
        this.isLoading = false;
      },
      error => this.error = error
      );
  }

}
