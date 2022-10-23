import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public user: User[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  getTotalUsers():number {
    const data = localStorage.getItem('USUARIO') 
    this.user = JSON.parse(data)

    const count = this.user.length

    return count
  }

}
