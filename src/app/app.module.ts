import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import {HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ChatComponent } from './modules/chat/chat.component';
import { FindPlayertwoComponent } from './modules/find-playertwo/find-playertwo.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthService } from './shared/auth.service';
import { ChatChildComponent } from './modules/chat/chat-child/chat-child.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ProfileComponent,
    ChatComponent,
    FindPlayertwoComponent,
    HomeComponent,
    ChatChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
