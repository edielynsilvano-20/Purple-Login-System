import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],  // ✅ ADD RouterModule
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.email === savedUser.email && this.password === savedUser.password) {

      alert("Login successful!");
      this.router.navigate(['/']);

    } else {

      alert("Invalid email or password");

    }
  }
}