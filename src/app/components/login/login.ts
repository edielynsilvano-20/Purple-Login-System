import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  email = '';
  password = '';

  login(){

    const savedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if(this.email === "admin@gmail.com" && this.password === "admin123"){

      alert("Login successful!");

    }
    else if(this.email === savedUser.email && this.password === savedUser.password){

      alert("Login successful!");

    }
    else{

      alert("Invalid email or password");

    }

  }

}