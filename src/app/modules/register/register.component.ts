import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: FormGroup;
  user: User[] = [];
  authed: boolean;

  constructor(
    private fb: FormBuilder,
    private route: Router
    ){
    this.form = this.fb.group({

      name: ['', Validators.compose([ //'placeholder', array de validações
      Validators.required, //campo requerido
      Validators.minLength(3), //mínimo de 3 caracteres
      Validators.maxLength(90) //máximo de 90 caracteres
      ])],
      email: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido          
      Validators.minLength(3), //mínimo de 3 caracteres
      Validators.maxLength(90), //máximo de 90 caracteres
      Validators.email
      ])],
      password: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(6), //mínimo de 3 caracteres
      Validators.maxLength(16) //máximo de 90 caracteres
      ])],
      password_check: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(6), //mínimo de 3 caracteres
      Validators.maxLength(16) //máximo de 90 caracteres
      ])],
      phone: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(10), //mínimo de 3 caracteres
      Validators.maxLength(11) //máximo de 90 caracteres
      ])],
      birth_date: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido
      ])],
      genre: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido
      Validators.min(0)
      ])]
    })
  }

  ngOnInit(): void {}

  fazerCadastro(){

    let password_form = this.form.controls['password'].value;
    let password_check_form = this.form.controls['password_check'].value;

    if (password_form != password_check_form) {
      window.alert('As senhas não coincidem')
    } else {

      let id = this.user.length + 1;
      let name_form = this.form.controls['name'].value;
      let email_form = this.form.controls['email'].value;      
      let phone_form = this.form.controls['phone'].value;
      let birth_date_form = this.form.controls['birth_date'].value;
      let genre_form = this.form.controls['genre'].value;
  
      this.user.push(new User(
        id,
        name_form,
        email_form,
        password_form,
        password_check_form,
        phone_form,
        birth_date_form,
        genre_form,
        this.authed = false
        ))
  
        //this.user != undefined || this.user != null && !
      if (this.form.valid && this.user != undefined) {
        console.log('usuario cadastrado')
        window.alert('Usuário Cadastrado com Sucesso!!')            
        this.route.navigate(['/','login']);//após confirmação de conta criada, 
                                          //direciona o usuáro para tela de login
        localStorage.setItem('USER',JSON.stringify(this.user)); //salva o dado no banco LocalStorage
      } else {
        console.log('usuario não cadastrado')
        window.alert('Preencha o formulário primeiro!')
      }
    }
  }

  saveStorage(){
    localStorage.setItem('USER' ,JSON.stringify(this.user));
  }

  getStorage(){
    this.user = JSON.parse(localStorage.getItem('USER'))
  }

}
