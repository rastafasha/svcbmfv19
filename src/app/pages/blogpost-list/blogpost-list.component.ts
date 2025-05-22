import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { KeysPipe } from '../../pipes/keys.pipe';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  imports: [
    CommonModule, RouterModule, NgFor, NgxPaginationModule, 
    KeysPipe, LoadingComponent, NgIf
  ],
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title = 'Blogs';
  blogs!: Blog[]  | null;
  error!: {};

  isLoading: boolean = false;

  private http: HttpClient;

  ServerUrl = environment.baseUrl;

  total!: number;
  p!: number;
  count!:  4;


  constructor(
    private titleService: Title,
    private blogService: BlogService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    //this.titleService.setTitle(this.title);
    this.isLoading = true;
    this.blogService.getBlogs().subscribe(
      (res:any) => {
        this.blogs = res.blogs.data
        this.total = res.total;
        this.isLoading = false;
      },
      error => this.error = error
    );
  }

  // Add this method to handle page changes
onPageChange(page: number) {
  this.p = page;
}

}
