import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
    private route: ActivatedRoute
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
    throw new Error('Method not implemented.');
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
    const profile_descript = '';
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
      profile_descript,
      status,
      online,
      reputation))

    if (this.user != undefined || this.user == null) {
      window.alert('Usuario Cadastrado com Sucesso!!')
      console.log('etapa 1 ok')

      //navegação
      
      console.log('etapa redirecionar ok')
      this.saveStorage()
      console.log('etapa storage ok')
      console.log(this.user)
    } else {
      console.log('usuario não cadastrado')
    }    
  }

  saveStorage(){
    const data = JSON.stringify(this.user)
    localStorage.setItem('USUARIO',data);
  }

}
