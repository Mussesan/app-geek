import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public form: FormGroup;
  public user: User;

  constructor(private regForm: FormBuilder){
    this.form = this.regForm.group({

      nome: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(90)
      ])],

      email: ['', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(254)
      ])],

      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(18)
      ])],

      birth_date: ['', Validators.compose([
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11)
      ])]

    })
  }

  registerAlert(): void{
    window.alert("Registro realizado com sucesso!");
    
  }

}
