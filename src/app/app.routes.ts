import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component: LoginComponent,
    },
    {
        path: '',
        component: LayoutComponent,
        children:[
            {
                path:'home',
                component: HomeComponent,
            },
        ]
    },
    {
        path:'register',
        component: RegisterComponent
    }
];
