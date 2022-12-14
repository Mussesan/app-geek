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

  mostrarMenu: boolean = false; //deixar como true somente durante testes 

  constructor(private authService: AuthService) {
  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      mostrar =>  this.mostrarMenu = mostrar
    );
  }

  onExit(){    
    if (this.mostrarMenu == true) {
      this.mostrarMenu = false
    }
  }
  
}


