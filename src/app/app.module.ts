import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ChatComponent } from './modules/chat/chat.component';
import { ActivitiesComponent } from './modules/activities/activities.component';
import { FindPlayertwoComponent } from './modules/find-playertwo/find-playertwo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ProfileComponent,
    ChatComponent,
    ActivitiesComponent,
    FindPlayertwoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
