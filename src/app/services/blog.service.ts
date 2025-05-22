import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog!:Blog;
  serverUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBlogs() {
    return this.http.get<Blog>(this.serverUrl + 'blog/').pipe(
      catchError(this.handleError)
    );
  }


  getBlog(id: number) {
    return this.http.get<Blog>(this.serverUrl + 'blog/show/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }
   getBlogSlug(slug: string) {
          const url = `${this.serverUrl}blog/slug/${slug}`;
          return this.http.get<any>(url)
            .pipe(
              map((resp:{ok: boolean, blogs: Blog[]}) => resp.blogs[0])
              );
        }
  getBlogwithCat(id: number) {
    return this.http.get<Blog>(this.serverUrl + 'blog/showcategory/' + id)
    .pipe(
      catchError(this.handleError)
    );
  }
  // getBlogSlug(slug: string) {
  //   return this.http.get<Blog>(this.serverUrl + 'blog/slug/' + slug)
  //   .pipe(
  //     catchError(this.handleError)
  //   );
  // }


  getactivosBlogs() {
    return this.http.get<Blog>(this.serverUrl + 'blog/activos').pipe(
      catchError(this.handleError)
    );
  }
 
  getFeaturedBlogs() {
    return this.http.get<Blog>(this.serverUrl + 'blog/destacados').pipe(
      catchError(this.handleError)
    );
  }

  getRecentBlogs() {
    return this.http.get<Blog>(this.serverUrl + 'blog/recientes/').pipe(
      catchError(this.handleError)
    );
  }

  


  

  getCategories() {
    return this.http.get<Category>(this.serverUrl + 'api/categories/').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
