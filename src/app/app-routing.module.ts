import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { VideoComponent } from './components/video/video.component';
import { RegisterComponent } from "./components/register/register.component";
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "video/:videoId", component: VideoComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
