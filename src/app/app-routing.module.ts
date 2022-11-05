import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatChildComponent } from './modules/chat/chat-child/chat-child.component';
import { ChatComponent } from './modules/chat/chat.component';
import { FindPlayertwoComponent } from './modules/find-playertwo/find-playertwo.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const app_router: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'find-player', component: FindPlayertwoComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'chatChild', component: ChatChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(app_router, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
