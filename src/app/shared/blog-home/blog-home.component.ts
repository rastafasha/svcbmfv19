import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Blog} from '../../models/blog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule, NgIf } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';


@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  imports: [
    CommonModule,RouterModule, NgIf, LoadingComponent
  ],
  styles: []
})
export class BlogHomeComponent implements OnInit {

  blogs!: Blog[]|null;

  error!: string;
  isLoading: boolean = false;

  order = "create_at";
ascending = true;

  constructor(
    public blogService: BlogService,
    private _sanitizer: DomSanitizer,
    ) {

   }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getBlogs().subscribe(
      (res:any) => {
        this.blogs = res.blogs.data
        this.isLoading = false
      },
      error => this.error = error
    );

  }

  getVideoIframe(url: string): SafeResourceUrl {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}

}
