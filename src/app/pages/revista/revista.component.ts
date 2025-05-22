import { Component, OnInit } from '@angular/core';
import { Revista } from '../../models/revista';
import {RevistaService} from '../../services/revista.service';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { KeysPipe } from '../../pipes/keys.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoadingComponent } from '../../shared/loading/loading.component';
@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  imports: [
    CommonModule, NgFor, KeysPipe, NgxPaginationModule, NgIf, LoadingComponent
  ],
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  revistas!:Revista[]|null;
  private http!: HttpClient;
  error!: string;
  isLoading: boolean = false;

  total!: number;
 p!: number;
  count!:  4;

  ServerUrl = environment.baseUrl;

  constructor(public revistaService: RevistaService) { }

  ngOnInit() {
    this.isLoading = true;
    this.revistaService.getRevistas().subscribe(
      (res:any) => {
        this.revistas = res.revistas.data
        this.total = res.total;
        this.isLoading = false;
      },
      error => this.error = error
    );

    window.scrollTo(0,0);
  }

}
