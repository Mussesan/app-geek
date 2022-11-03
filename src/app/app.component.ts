import { Component } from '@angular/core';
import { AuthService } from './modules/login/auth.service';
import { LoginComponent } from './modules/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geek-app';

  mostrarMenu: boolean = false;  

  constructor(public loginAuth: LoginComponent) {
  }

  ngOnInit(){
    this.loginAuth.mostarMenu.subscribe(
      mostrar =>  this.mostrarMenu = mostrar
    )
  }
}
