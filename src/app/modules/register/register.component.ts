import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public form: FormGroup;
  public user: User[] = [];
  

  
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
      Validators.maxLength(90) //máximo de 90 caracteres
      ])],
      password: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(3), //mínimo de 3 caracteres
      Validators.maxLength(16) //máximo de 90 caracteres
      ])],
      password_check: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(3), //mínimo de 3 caracteres
      Validators.maxLength(16) //máximo de 90 caracteres
      ])],
      phone: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido    
      Validators.minLength(10), //mínimo de 3 caracteres
      Validators.maxLength(11) //máximo de 90 caracteres
      ])],
      birth_date: ['', Validators.compose([ //'placeholder', array de validações   
      Validators.required, //campo requerido
      ])]
    })
  }
  ngOnInit(): void {
    
  }

  lotalUsersadd(){
    
  }

  fazerCadastro(){

    const id = this.user.length + 1;
    const name_form = this.form.controls['name'].value;
    const email_form = this.form.controls['email'].value;
    const password_form = this.form.controls['password'].value;
    const password_check_form = this.form.controls['password_check'].value;
    const phone_form = this.form.controls['phone'].value;
    const birth_date_form = this.form.controls['birth_date'].value;
    const nickname = '';
    const status = true;
    const online = false;
    const reputation = 0;

    this.user.push(new User(
      id,
      name_form,
      email_form,
      password_form,
      password_check_form,
      phone_form,
      birth_date_form,
      nickname,
      status,
      online,
      reputation))

      //this.user != undefined || this.user != null && !

    if (this.form.valid && this.user != undefined) {
      window.alert('Usuario Cadastrado com Sucesso!!')      
      //navegação      
      this.route.navigate(['/','login']);
      this.saveStorage()
    } else {
      console.log('usuario não cadastrado')
      window.alert('Preencha o formulário primeiro!')
    }    
  }

  saveStorage(){    
    localStorage.setItem('USER',JSON.stringify(this.user));
  }

  getStorage(){
    const user = localStorage.getItem('USER');
    console.log(user);
  }

}
