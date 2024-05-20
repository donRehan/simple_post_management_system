import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
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
  //Where posts come and are handled
  posts_source = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getfirst_post() {
    return this.http.get<Post[]>(this.posts_source)
    .pipe(map(posts => posts));
  }
}
