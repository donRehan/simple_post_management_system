import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
import * as _ from 'lodash';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts$: Observable<Post[]>;
  firstPost: any;

  constructor(private http: HttpClient) { }

  clicker() {
    console.log('first post');
    console.log(this.getfirst_post());
  }

  getfirst_post() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(posts => posts[0]));
  }

  ngOnInit() {
       this.getfirst_post()
      .subscribe(post => this.firstPost = post);
  }
}
