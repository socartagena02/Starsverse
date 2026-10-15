import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-support.component',
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  constructor(private router: Router) {
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
