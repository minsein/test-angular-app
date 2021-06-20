import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '',  component: HomeComponent },
      { path: 'posts',  component: PostsComponent },
      { path: 'contactform', component: ContactFormComponent }
    ], {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
