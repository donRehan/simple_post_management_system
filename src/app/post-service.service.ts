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

  constructor(private http: HttpClient) { }

  getfirst_post() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(posts => posts[0]));
  }
}
