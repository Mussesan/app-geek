import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private auth: AuthenticateService) { }

  private user: User;

  ngOnInit(): void {
  }

  fazerLogin(){
    
  }

}
