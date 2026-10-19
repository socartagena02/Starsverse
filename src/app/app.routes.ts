import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ShoppingCartComponent } from './pages/shopping_cart/shopping-cart.component';
import { ProductsPageComponent } from './pages/products/products.component';
import { SupportComponent } from './pages/support/support.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

export const routes: Routes = [
   { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'product',
    component: ProductsPageComponent
  },
  {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'forgot-password',
    component: ChangePasswordComponent
  }
    
];
