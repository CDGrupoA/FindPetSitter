
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.css']
})
export class AuthButtonsComponent {
  constructor(private authService: AuthService,
    private router:Router) {}

  @Output() googleLogin = new EventEmitter<void>();


  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then(result => {
      this.router.navigate([''])
    })
    .catch(error => console.error(error));
  }

  onFacebookLogin(): void {
    console.log('Facebook login clicked!');
  }
}
