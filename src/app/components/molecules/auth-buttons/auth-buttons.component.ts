
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent {
  constructor(private authService: AuthService) {}

  @Output() googleLogin = new EventEmitter<void>();


  //Substituir nome pela função correspondente no html deste componente
  // Adicionar console.log para verificação de autenticação
  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.error(error));
  }

  onFacebookLogin(): void {
    console.log('Facebook login clicked!');
  }
}
