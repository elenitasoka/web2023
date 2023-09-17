// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = ''; // Error message

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        // If authentication is successful, navigate to the userhome page.
        this.router.navigateByUrl('/userhome');
      } else {
        // If authentication fails, display an error message.
        this.errorMessage = 'Incorrect Email or Password';
      }
    });
  }
}
