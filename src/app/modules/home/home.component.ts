import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

import { RegisterModule } from '../register/register.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  public user: User[] = [];
  public imSrc: string

  public nome: string
  public genre: number

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.nome = this.user[0].name

    if (this.user[0].genre == 1) {
      this.imSrc = '../../../assets/images/guy6.png'
    } else if (this.user[0].genre == 2) {
      this.imSrc = '../../../assets/images/girl2.png'
    } else if (this.user[0].genre == 0) {
      this.imSrc = '../../../assets/images/girl9.png'
    }
  }  

  showname(){

    this.user = JSON.parse(localStorage.getItem('USER'))
    console.log(this.user[0].email)
  }

}
