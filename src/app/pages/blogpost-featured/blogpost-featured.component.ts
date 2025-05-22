import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  imports: [
    CommonModule, RouterModule, NgFor
  ],
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  // blogs!: Blog [] | null;
  blogs!: Blog[]  | null;
  error!: {};

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe(
      (resp:any) => this.blogs = resp.data,
      error => this.error = error
    );
  }

}
