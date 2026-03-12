import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {

constructor(private router: Router){}

logout(){
localStorage.removeItem('loggedUser');
this.router.navigate(['/']);
}

}