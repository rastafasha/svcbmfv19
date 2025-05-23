import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';
import { BlogpostRecentComponent } from '../index.paginas';
import { BancuadradoComponent } from '../../shared/banner/bancuadrado/bancuadrado.component';
import { BanverticalComponent } from '../../shared/banner/banvertical/banvertical.component';
import { LoadingComponent } from '../../shared/loading/loading.component';


@Component({
  selector: 'app-blogd',
  imports: [
    // DecoupledEditor,
     NgIf, CommonModule, SafePipe,
     BlogpostRecentComponent, BanverticalComponent, 
     BancuadradoComponent,NgIf,LoadingComponent
  ],
  templateUrl: './blogd.component.html',
  styleUrl: './blogd.component.css'
})
export class BlogdComponent {

  // blog!: Observable<Blog>;
    blog!: Blog;
    isLoading: boolean = true;
    
    slug:any;
    // public Editor = DecoupledEditor;
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private blogService: BlogService,
      private titleService: Title,
       private _sanitizer: DomSanitizer,
       private activatedRoute: ActivatedRoute,
    ) { }
  
    ngOnInit() {
  
      const slug = this.activatedRoute.snapshot.paramMap.get('slug');
      this.isLoading = true;

          this.slug = slug;

          this.blogService.getBlogSlug(this.slug).subscribe(
            (res:any) => {
              this.blog = res.blog;
              this.isLoading = false;
            }
          );
  
      // this.blog = this.activatedRoute.paramMap.pipe(
      //   switchMap(params => {
      //     this.slug = params.get('slug');
      //     window.scrollTo(0, 0);
      //     return this.blogService.getBlogSlug(this.slug!);
      //   })
      // );
    }
  
    getBlog(slug:any) {
        this.blogService.getBlogSlug(this.slug!).subscribe((res:any)=>{
          this.blog = res;
          console.log(res);
        })
      }
  
    // public onReady( editor ) {
    //   editor.ui.getEditableElement().parentElement.insertBefore(
    //       editor.ui.view.toolbar.element,
    //       editor.ui.getEditableElement()
    //   );
    // }
  
  
    getVideoIframe(url:any) {
      var video, results;
  
      if (url === null) {
          return '';
      }
      results = url.match('[\\?&]v=([^&#]*)');
      video   = (results === null) ? url : results[1];
  
      return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }
}
