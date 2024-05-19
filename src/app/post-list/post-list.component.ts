import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
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

  constructor(private postService: PostServiceService) { }

  ngOnInit() {
       this.postService.getfirst_post()
      .subscribe(post => this.firstPost = post);
  }
}
