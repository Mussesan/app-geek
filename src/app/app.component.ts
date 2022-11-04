import { Component, Input } from '@angular/core';
import { LoginComponent } from './modules/login/login.component';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geek-app';

  mostrarMenu: boolean = true;

  constructor(private authService: AuthService) {
  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      mostrar =>  this.mostrarMenu = mostrar
    );
  }
}


