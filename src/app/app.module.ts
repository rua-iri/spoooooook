import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { CategoryComponent } from './components/category/category.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmMenuComponent } from './components/film-menu/film-menu.component';
import { VideoComponent } from './components/video/video.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CategoryComponent,
    FilmItemComponent,
    FilmMenuComponent,
    VideoComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
