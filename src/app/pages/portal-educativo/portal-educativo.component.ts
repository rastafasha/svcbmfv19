import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MiembroService} from '../../services/miembro.service';
import {Miembro} from '../../models/miembros';

@Component({
  selector: 'app-portal-educativo',
  templateUrl: './portal-educativo.component.html',
  styleUrls: ['./portal-educativo.component.css']
})
export class PortalEducativoComponent implements OnInit {

  miembros!: Miembro[];

  error!: string;
  editorContent!: string;

  constructor(public miembroService: MiembroService,
    private router: ActivatedRoute) {
    
   }

   ngOnInit() {
    this.miembroService.getMiembros().subscribe(
      (res:any) => this.miembros = res.data,
      error => this.error = error
    );
  }

}
