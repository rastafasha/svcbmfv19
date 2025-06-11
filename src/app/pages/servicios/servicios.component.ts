import { Component, OnInit } from '@angular/core';
import { FormacionService } from '../../services/formacion.service';
import { Formacion } from '../../models/formacion';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { KeysPipe } from '../../pipes/keys.pipe';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  imports: [
    CommonModule, RouterModule, NgFor, NgxPaginationModule, 
    KeysPipe, LoadingComponent, NgIf,
  ],
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  title = 'Servicios de Cirugía en el Sistema Público de Salud';
  formacions!: Formacion[]|null;
  error!: {};
  isLoading: boolean = false;
  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  total!: number;
  p!: number;
  count!:  6;


  constructor(
    private formacionService: FormacionService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    this.isLoading = true;
    this.formacionService.getFormacions().subscribe(
      (res:any) => {
        this.formacions = res.formacions.data
        this.total = res.total;
        this.isLoading = false;
      },
      error => this.error = error
    );

    window.scrollTo(0,0);
  }

  onPageChange(page: number) {
  this.p = page;
}

}
