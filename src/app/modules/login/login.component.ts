import { Component, Input, OnInit } from '@angular/core';


import { User } from 'src/app/models/user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User[] = [];

  constructor(private authService: AuthService) {
    
  
  }

  ngOnInit(): void {
  }

  fazerLogin(){
    console.log('login pressionado')
  }

}
