import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-catalog',
  imports: [],
  templateUrl: './navbar-catalog.html',
  styleUrl: './navbar-catalog.css'
})
export class NavbarCatalog {
  constructor(private router: Router) {
  }
  goToLogin(): void{
    this.router.navigate(['/login']);
  }
}
