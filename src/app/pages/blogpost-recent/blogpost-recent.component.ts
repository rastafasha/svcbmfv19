import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeysPipe } from '../../pipes/keys.pipe';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  imports: [
    CommonModule, RouterModule, NgFor, NgIf , LoadingComponent
  ],
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs!: Blog[]  | null;
  error!: {};
  isLoading: boolean = true;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.isLoading = true;
    this.blogService.getRecentBlogs().subscribe(
      (res: any) => {
        this.blogs = res.blogsrecientes.data;
        this.isLoading = false;
      },
      error => this.error = error
    );
    
  }

}
