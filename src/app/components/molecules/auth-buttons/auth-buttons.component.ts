import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent {
  @Output() googleLogin = new EventEmitter<void>();


  //Substituir nome pela função correspondente no html deste componente
  // Adicionar console.log para verificação de autenticação
  onGoogleLogin(): void {

    console.log('Google login clicked!');

  }

  onFacebookLogin(): void {

    console.log('Facebook login clicked!');

  }
}
