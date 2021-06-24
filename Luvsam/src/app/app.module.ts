import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MiddleScreenComponent } from './main-screen/middle-screen/middle-screen.component';
import { RightScreenComponent } from './main-screen/right-screen/right-screen.component';
import { BlogsComponent } from './main-screen/middle-screen/blogs/blogs.component';
import { TextEditorComponent } from './main-screen/middle-screen/text-editor/text-editor.component';
import { ShowBlogComponent } from './main-screen/middle-screen/show-blog/show-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainScreenComponent,
    SignupComponent,
    LoginComponent,
    MiddleScreenComponent,
    RightScreenComponent,
    BlogsComponent,
    TextEditorComponent,
    ShowBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
