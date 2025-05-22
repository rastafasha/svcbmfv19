import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Category } from '../../models/category';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KeysPipe } from '../../pipes/keys.pipe';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  imports: [
    CommonModule, RouterModule, NgFor
  ],
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: Category[] | null;
  error!: {};

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getCategories().subscribe(
      (resp:any) => this.categories = resp.data,
    );
  }

}
