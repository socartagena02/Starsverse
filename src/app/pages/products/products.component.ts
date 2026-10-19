import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card';
import { PRODUCTS } from '../../data/products';
import { Products } from '../../models/products-models';
import { NavbarCatalog } from '../../shared/components/navbar-catalog/navbar-catalog';

@Component({
  selector: 'app-products.component',
  imports: [ProductCardComponent, NavbarCatalog],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsPageComponent {
  constructor(private router:Router){}
  products: Products[] = PRODUCTS;
}
