import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
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

  //Función de envio de formulario
  onSubmit() {
    console.log('¡Iniciando sesión!, espere un momento', this.credentials)
  }
}
