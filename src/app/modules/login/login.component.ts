import { Component, Input, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, Form, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from './auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public user: User[] = [];

  public email: string
  public password: string
  
  constructor(
    public route: Router,
    public formLogin: FormBuilder
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

  ngOnInit(): void {

    if (localStorage.getItem('USER')) {
      
    } else {
      window.alert("Não há usuários cadastrados!")
      this.route.navigate(['/','register']);
    }

  }

  fazerLogin(){
    this.user = JSON.parse(localStorage.getItem('USER'))

    for (let i = 0; i < (localStorage.length) ; i++) {

      if (this.form.controls['email'].value == this.user[i].email &&
      this.form.controls['password'].value == this.user[i].password)
      {
        window.alert(`Bem vindo `+this.user[i].name)
        this.route.navigate(['/','home']);

      } else {
        window.alert('Email ou senha inválidos')
      }

      console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
      console.log("login input: ",this.form.controls['email'].value)
      console.log("login banco: ",this.user[i].email)
      console.log("password input: ",this.form.controls['password'].value)
      console.log("password banco: ",this.user[i].password)
      console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")


      

    }

    

  }
}
