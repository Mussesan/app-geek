import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatChildComponent } from './modules/chat/chat-child/chat-child.component';
import { ChatComponent } from './modules/chat/chat.component';
import { EcomerceComponent } from './modules/ecomerce/ecomerce.component';
import { FindPlayertwoComponent } from './modules/find-playertwo/find-playertwo.component';
import { Layout2Component } from './modules/find-playertwo/layout2/layout2.component';
import { Layout3Component } from './modules/find-playertwo/layout3/layout3.component';
import { Layout4Component } from './modules/find-playertwo/layout4/layout4.component';
import { Layout5Component } from './modules/find-playertwo/layout5/layout5.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { Profile1Component } from './modules/profiles/profile1/profile1.component';
import { Profile2Component } from './modules/profiles/profile2/profile2.component';
import { Profile3Component } from './modules/profiles/profile3/profile3.component';
import { Profile4Component } from './modules/profiles/profile4/profile4.component';
import { Profile5Component } from './modules/profiles/profile5/profile5.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';

const app_router: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'find-player', component: FindPlayertwoComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'chatChild', component: ChatChildComponent},
  {path: 'lay2', component: Layout2Component},
  {path: 'lay3', component: Layout3Component},
  {path: 'lay4', component: Layout4Component},
  {path: 'lay5', component: Layout5Component},
  {path: 'ecomerce', component: EcomerceComponent},
  {path: 'profile1', component: Profile1Component},
  {path: 'profile2', component: Profile2Component},
  {path: 'profile3', component: Profile3Component},
  {path: 'profile4', component: Profile4Component},
  {path: 'profile5', component: Profile5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(app_router, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
