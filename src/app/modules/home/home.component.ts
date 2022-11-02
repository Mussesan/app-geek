import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  showname(){

  //  this.usuario = JSON.parse(localStorage.getItem('USUARIO'));

  //  console.log(this.usuario.name)
  }

  
  

}
