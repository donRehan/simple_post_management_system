import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, filter } from "rxjs";
import * as _ from 'lodash';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  posts_source = '';
  mock_dataUrl = 'api/data';
  httpOptions= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  posts_getter() {
    return this.http.get<Post[]>(this.posts_source)
    .pipe(map(posts => posts));
  }

  getPost(id: number){
    return this.http.get<Post>(`${this.posts_source}/${id}`)
    .pipe(map(post => post));
  }

  getmockdata() {
    return this.http.get<Post[]>(this.mock_dataUrl);
  }

  getmockPost(id: number){
    return this.http.get<Post>(`${this.mock_dataUrl}/${id}`);
  }

  // only for mock data
  updatePost(id: number, post: Post)
  {
    let updated_post = post;
    return this.http.put<Post>(`${this.mock_dataUrl}/${id}`, updated_post, this.httpOptions);
  }

  updatebost(post: Post): Observable<any>{
    return this.http.put(this.mock_dataUrl, post, this.httpOptions);
  }

}
