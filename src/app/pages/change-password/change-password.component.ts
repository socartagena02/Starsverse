import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth'; 

@Component({
  selector: 'app-change-password.component',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  changePassword: FormGroup;
  loading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private router : Router, private authService : AuthService) {
    this.changePassword = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
   }

   get email(): AbstractControl | null{
    return this.changePassword.get('email');
   }
   sendCode(){
    const email = 'usuario@ejemplo.com';
    this.authService.sendResetCode(email).subscribe({
     next: (res:any) => {
      console.log(res);
     },
     error: (err:any) => {
      console.error(err);
     }
    });
   }
}
