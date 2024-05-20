import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServiceService } from '../post-service.service';
import { Subject, Observable, map } from "rxjs";
import * as _ from 'lodash';
import {MatPaginatorIntl, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import '@angular/material/core';

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
  posts$: any;
  pageEvent: PageEvent;
  activePageDataChunk = [];
  length = 1000;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];

  ngOnInit()  {
       this.postService.getfirst_post()
      .subscribe(posts => {this.posts$ = posts
        this.activePageDataChunk = this.posts$.slice(0, this.pageSize)
      }
      );
  }

  constructor(private postService: PostServiceService) {
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  onPageChanged(e) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.posts$.slice(firstCut, secondCut);
  }
}
