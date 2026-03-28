import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-login-and-register',
  imports: [RouterLink],
  templateUrl: './login-and-register.html',
  styleUrl: './login-and-register.scss',
})
export class LoginAndRegister {
  readonly mode = signal<AuthMode>('login');
  readonly isLogin = computed(() => this.mode() === 'login');
  readonly isRegister = computed(() => this.mode() === 'register');

  setMode(newMode: AuthMode): void {
    this.mode.set(newMode);
  }

  onLoginSubmit(): void {
    console.log('Login submit');
  }

  onRegisterSubmit(): void {
    console.log('Register submit');
  }
}