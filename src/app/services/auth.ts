import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 

  constructor() { }
  sendResetCode(email: string): Observable<any> {
    console.log('Enviado código a:', email);
    return of({success:true});
  }


  isLoggedIn() {
    return !!localStorage.getItem('token'); 
  }
}