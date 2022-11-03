import { EventEmitter, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public form: FormGroup;
  // public user: User[] = [];
  // private userAutenticated: boolean = false;

  // public mostarMenu = new EventEmitter<boolean>();
  
  // constructor(
  //   public route: Router,
  //   public formAuth: FormBuilder
  //   ){

  //     this.form = this.formAuth.group({

  //       email: ['', Validators.compose([ //'placeholder', array de validações
  //       Validators.required, //campo requerido
  //       Validators.email
  //       ])],
  //       password: ['', Validators.compose([ //'placeholder', array de validações
  //       Validators.required, //campo requerido
  //       Validators.email
  //       ])]

  //   })

  // }

  // ngOnInit() {

  //   if (localStorage.getItem('USER')) {
      
  //   } else {
  //     window.alert("Não há usuários cadastrados!")
  //     this.route.navigate(['/','register']);
  //   }

  // }

  // loginAuth() {
  //   this.user = JSON.parse(localStorage.getItem('USER'))

  //   for (let i = 0; i < (localStorage.length) ; i++) {

  //     if (this.form.controls['email'].value == this.user[i].email &&
  //     this.form.controls['password'].value == this.user[i].password)
  //     {
  //       window.alert(`Bem vindo `+this.user[i].name)
  //       this.mostarMenu.emit(true)
  //       this.userAutenticated = true;
  //       this.route.navigate(['/','home']);

  //     } else {
  //       window.alert('Email ou senha inválidos')
  //       this.userAutenticated = false
  //     }

  //     console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
  //     console.log("login input: ",this.form.controls['email'].value)
  //     console.log("login banco: ",this.user[i].email)
  //     console.log("password input: ",this.form.controls['password'].value)
  //     console.log("password banco: ",this.user[i].password)
  //     console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_")
  //   }
  // }
}
