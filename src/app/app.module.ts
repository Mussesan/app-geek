import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Form, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ChatComponent } from './modules/chat/chat.component';
import { FindPlayertwoComponent } from './modules/find-playertwo/find-playertwo.component';
import { HomeComponent } from './modules/home/home.component';
import { AuthService } from './shared/auth.service';
import { ChatChildComponent } from './modules/chat/chat-child/chat-child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pp1Component } from './modules/find-playertwo/players/pp1/pp1.component';
import { Pp2Component } from './modules/find-playertwo/players/pp2/pp2.component';
import { Pp3Component } from './modules/find-playertwo/players/pp3/pp3.component';
import { Pp4Component } from './modules/find-playertwo/players/pp4/pp4.component';
import { Pp5Component } from './modules/find-playertwo/players/pp5/pp5.component';
import { Layout2Component } from './modules/find-playertwo/layout2/layout2.component';
import { Layout3Component } from './modules/find-playertwo/layout3/layout3.component';
import { Layout4Component } from './modules/find-playertwo/layout4/layout4.component';
import { Layout5Component } from './modules/find-playertwo/layout5/layout5.component';
import { EcomerceComponent } from './modules/ecomerce/ecomerce.component';
import { Profile1Component } from './modules/profiles/profile1/profile1.component';
import { Profile2Component } from './modules/profiles/profile2/profile2.component';
import { Profile3Component } from './modules/profiles/profile3/profile3.component';
import { Profile4Component } from './modules/profiles/profile4/profile4.component';
import { Profile5Component } from './modules/profiles/profile5/profile5.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    ChatComponent,
    FindPlayertwoComponent,
    HomeComponent,
    ChatChildComponent,
    Pp1Component,
    Pp2Component,
    Pp3Component,
    Pp4Component,
    Pp5Component,
    Layout2Component,
    Layout3Component,
    Layout4Component,
    Layout5Component,
    EcomerceComponent,
    Profile1Component,
    Profile2Component,
    Profile3Component,
    Profile4Component,
    Profile5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
