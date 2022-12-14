import { Component, Input, OnInit, NgModule, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, Form, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user: User[] = [];
  public authUser: boolean = false;
  public mostarMenu = new EventEmitter<boolean>();
    
  constructor(
    public route: Router,
    public formLogin: FormBuilder,
    public authService: AuthService
    ){

      this.form = this.formLogin.group({

        email: ['', Validators.compose([ //'placeholder', array de validações
        Validators.required, //campo requerido
        Validators.email
        ])],
        password: ['', Validators.compose([ //'placeholder', array de validações
        Validators.required, //campo requerido
        Validators.email
        ])]

    })

  }

  ngOnInit() {
    if (localStorage.getItem('USER')) {
      //do nothing      
    } else {
      window.alert("Não há usuários cadastrados neste dispositivo!")
      this.route.navigate(['/','register']);
    }
  }

  fazerLogin(){
    this.user = JSON.parse(localStorage.getItem('USER'))

    for (let i = 0; i < (localStorage.length) ; i++) {

      if (this.form.controls['email'].value == this.user[i].email &&
          this.form.controls['password'].value == this.user[i].password)
      {
        if (this.user[i].genre == 1) {
          window.alert(`Seja Bem Vindo, `+this.user[i].name+'!')
        } else if (this.user[i].genre == 2) {
          window.alert(`Seja Bem Vinda, `+this.user[i].name+'!')
        }        
        this.authService.authLogin()
        this.route.navigate(['/','home']);

      } else {
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
        console.log("login input form: ",this.form.controls['email'].value)
        console.log("login seu banco local: ",this.user[i].email)
        console.log("password input form: ",this.form.controls['password'].value)
        console.log("password seu banco local: ",this.user[i].password)
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")

        window.alert('Email ou senha inválidos')
        this.authUser = false
      }


    }
  }
}
