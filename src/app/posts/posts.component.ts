import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  posts: any;
  constructor(private postservice: PostsService) { 

    
  }
  ngOnInit(){
    this.postservice.getPosts().subscribe(
      response => {
        this.posts = response;
        console.log(response);
      },
      error =>{
        console.log(error);
      });
  }
  
  createPost(title: HTMLInputElement){
    // let post = {title: title.value};
    // title.value ="";
    
    // this.http.post<Post>(this.url, post)
    // .subscribe(response=>{
    //   post['id']= response.id;
    //   this.posts.splice(0, 0, post);
    //   console.log(response);
    // })
  }

  updatePost(post: Post){
    //this.http.patch(this.url, post.title);
  }

}
export interface Post{
  id: number;
  firstname:string;
  surname:string;
}
