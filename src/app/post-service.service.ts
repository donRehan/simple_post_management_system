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
    return this.http.get<Post[]>(this.mock_dataUrl)
    .pipe(map(posts => posts));
  }

  getmockPost(id: number){
    return this.http.get<Post>(`${this.mock_dataUrl}/${id}`)
    .pipe(filter(post => post.id === id));
  }

}
