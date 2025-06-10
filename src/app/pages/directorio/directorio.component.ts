import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeysPipe } from '../../pipes/keys.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { EstadosService } from '../../services/estados.service';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  standalone: true,
  imports: [
    CommonModule, RouterModule, NgFor, KeysPipe, NgxPaginationModule,
    EscapeHtmlPipe,FormsModule,ReactiveFormsModule, NgIf, LoadingComponent
  ],
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  directories!: Directorio;
  isLoading = false;
  error!: string;
  estados!:any[];
  estado!:string;
  especialidad!:any;
  doctores:any;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;
  imagenSerUrl = environment.imageUrl;

   p!: number;
  count!:  8;

  classApplied = true;

  heroes = Directorio;
  selectedHero?: Directorio;

  vCardInfo!:string;
  value!: string;
  display = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  href!: string;

  query:string ='';
  searchForm!:FormGroup;
  currentPage = 1;

  constructor(
    public directorioService: DirectorioService,
    public estadosService: EstadosService,
    private fb:FormBuilder,
    handler: HttpBackend) {
    this.http = new HttpClient(handler);

   }

  ngOnInit() {

    window.scrollTo(0,0);
    this.getEstadosList();
    this.getDirectories();
    this.validarFormularioPerfil();

  }

  getDirectories(): void {
    this.isLoading = true;
    this.directorioService.getDirectorios().subscribe(
      (res:any) =>{
        this.directories = res.directories.data;
        this.isLoading = false;
      },
    );
    ( error: string) => this.error = error;
  }

   getEstadosList(): void {
    this.estadosService.getEstados().subscribe(
      (res:any) =>{
        this.estados = res.estados;
        console.log(res);
      }
    );
  }

  getSpecialitiesList(){
    // this.specialityService.getSpecialitys().subscribe((resp:any)=>{
    //   this.specialities = resp;
    //   // console.log(resp);
    // })
  }


  toggleClass(id: number){
    this.classApplied = !this.classApplied;
  }


  // buscarDirectorio( termino: string) {

  //   this.directorioService.buscarDirectorio( termino )
  //     .subscribe( directorios => this.doctores = directorios);


  // }

  // search( text: string) {// funciona, devuelve la busqueda

  //   if(this.doctores == undefined){
  //     console.log('pendiente');

  //   }


  //   if( this.search.length == 0){
  //     return;

  //   }

  //   return this.http.get(this.ServerUrl + 'api_directorio/search?text=' + text )
  //     .toPromise()
  //     .then((doctores: Object | undefined) => {
  //       this.doctores = {
  //         'results': JSON.stringify(doctores, null),
  //         'json': () => {
  //           return doctores;
  //         }
  //       };
  //       // console.log(this.doctores);
  //       // devolver el array
  //       const mapped = doctores ? Object.keys(doctores)
  //         .map(key => ({ type: key, value: (doctores as any)[key] })) : [];

  //       this.doctores = doctores;
  //       // console.log(this.doctores);
  //     });

  // }



public PageSize(): void {
    this.getDirectories();
    this.query = '';
  }


   search() {
    return this.directorioService.search(this.query).subscribe(
      (res:any)=>{
        this.directories = res;
        if(!this.query){
          this.getDirectories();
        }
      });
  }


  /**
   * @method: Descarga la imagen del qr
   * @author: malcolm
   * @since: 11/07/2022
   */


   vcard!: string;

  downloadImage(){

    const box = document.getElementById('box');
    box?.parentElement?.classList.add('parent')

    box?.hasAttribute('img');

    const parentElem = document.getElementsByClassName('parent')[0];
    const imgElem = parentElem ? parentElem.querySelector('img') : null;
    this.href = imgElem && imgElem instanceof HTMLImageElement ? imgElem.src : '';

    console.log('img', this.href);

    this.vcard = this.href;
    console.log('vcard', this.vcard);
  }

 
  validarFormularioPerfil(){
    this.searchForm = this.fb.group({
      estado: [''],
      especialidad: [''],
      query: [''],
      id: [''],
    });
  }



 onSearch(){
    const formValue = this.searchForm.value;
    console.log(this.searchForm.value);
    this.getDirectoryFilter();
    } 

    getDirectoryFilter(){
      this.isLoading = true;
      this.currentPage;
      this.estado = this.searchForm.value.estado;
      this.especialidad = this.searchForm.value.especialidad;
      this.directorioService.getAllDirectoryFiltered(
        // this.currentPage,
        this.estado, 
        this.especialidad,
      ).subscribe((resp:any)=>{
        console.log(resp);
        this.isLoading = false;
       
      })
    }


}
