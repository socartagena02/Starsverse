import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-products.component',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private router:Router){}
  goToLogin(){
    this.router.navigate(['/login']);
  }
  searchProducts(){
    this.router.navigate(['/product']);
  }
}
