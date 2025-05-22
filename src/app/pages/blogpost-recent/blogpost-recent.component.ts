import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeysPipe } from '../../pipes/keys.pipe';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  imports: [
    CommonModule, RouterModule, NgFor 
  ],
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs!: Blog[]  | null;
  error!: {};

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getRecentBlogs().subscribe(
      (res: any) => this.blogs = res.data,
      error => this.error = error
    );
    
  }

}
