import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  postId: number;
  Post = {userId: null, title: null, body: null , id: null}

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private postService: PostServiceService
  ) {
  }

  ngOnInit(): void{
   // this.getPost_detail();
    this.getmockPost_detail();
  }

  getPost_detail(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(post => this.Post = post);
  }

  getmockPost_detail(): void {
   //path: 'detail/:id',
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.getmockPost(id)
      .subscribe(post => this.Post = post);
  }

}
