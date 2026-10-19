import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  constructor(private router: Router){
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
  goToSignUp(){
    this.router.navigate(['/register']);
  }
}
