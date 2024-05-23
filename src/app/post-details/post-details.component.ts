import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostServiceService } from '../post-service.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  postId: number;
  Post = {userId: null, title: null, body: null , id: null}
  hideTitle = false;
  hideBody = false;
  hasError = false;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private postService: PostServiceService
  ) {
  }

  ngOnInit(): void{
   // this.getPost_detail();
    console.log(this.hasError);
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
      .subscribe({next: post => this.Post = post,
                  error: err => this.hasError = true});
  }

  edit_title() {
    this.hideTitle = !this.hideTitle;
  }

  edit_body() {
    this.hideBody = !this.hideBody;
  }

  submit_body(value: string){
    this.Post.body = value;
    this.hideBody = !this.hideBody;
  }

  submit_title(value: string){
    this.Post.title = value;
    this.hideTitle = !this.hideTitle;
    this.edit_post();
  }

  save_body(): void{
    if(this.Post){
      this.postService.updatebost(this.Post).subscribe();
    }
    this.edit_body();
  }

  save_post(): void{
    if(this.Post){
      this.postService.updatebost(this.Post).subscribe();
    }
    this.edit_title();
  }

  edit_post(): void {
   //path: 'detail/:id',
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.updatePost(id, this.Post).subscribe();
  }


}
