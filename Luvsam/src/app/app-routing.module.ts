import { ShowBlogComponent } from './main-screen/middle-screen/show-blog/show-blog.component';
import { TextEditorComponent } from './main-screen/middle-screen/text-editor/text-editor.component';
import { BlogsComponent } from './main-screen/middle-screen/blogs/blogs.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:"" , component: MainScreenComponent, children:[
    { path:"", component:BlogsComponent},
    { path:"blogs", component:BlogsComponent},
    { path:"new-blog", component:TextEditorComponent},
    { path:"show-blog", component:ShowBlogComponent}
  ]},
  { path:"signup", component: SignupComponent},
  { path:"login", component: LoginComponent},
  { path:"**", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
