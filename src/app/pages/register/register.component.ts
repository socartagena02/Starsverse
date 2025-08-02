import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials = {
    email : '',
    password : '',
    fullName : '',
    confirmPassword : ''
  };
  constructor(private router: Router){
    
  }
  ngSubmit(registerForm: NgForm) {  
    if(registerForm.valid){
      console.log('Datos guardados', registerForm.value)
      this.router.navigate(['/login']);
    }else{
      console.log('Rellene los datos nuevamente', registerForm.invalid)
    Object.keys(registerForm.controls).forEach(key => {
        registerForm.controls[key].markAsTouched();
      });
    }
  }
}
