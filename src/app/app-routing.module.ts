import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from '../app/post-list/post-list.component';
import { PostDetailsComponent } from '../app/post-details/post-details.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: PostListComponent },
  //{ path: 'post/:id', component: PostDetailsComponent }
  { path: 'api/data/:id', component: PostDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
