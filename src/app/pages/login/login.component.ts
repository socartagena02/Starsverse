import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// Componente
export class LoginComponent {
  credentials = {
    email : '',
    password : ''
  };
  constructor(private router: Router) {}
  //Función de envio de formulario
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log('¡Iniciando sesión!, espere un momento', this.credentials);
      this.router.navigate(['/home']);
    } else {
      console.log('Formulario inválido');

    }
  }
  
}
