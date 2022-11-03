import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  public user: User[] = [];



  ngOnInit(): void {
  }

  

  showname(){

    this.user = JSON.parse(localStorage.getItem('USER'))
    console.log(this.user[0].email)
  }

  
  

}
