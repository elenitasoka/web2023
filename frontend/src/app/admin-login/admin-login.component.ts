import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';
  
  constructor(private router: Router, private http: HttpClient) {}

  login() {
    let bodyData = {
      username: this.username,
      password: this.password
    };

    this.http.post("http://localhost:9992/admin/login", bodyData).subscribe((resultData: any) => {
      if (resultData.status) {
        this.router.navigateByUrl('/adminHome');
        alert("You have successfully logged in");
      } else {
        alert("Incorrect Username or Password");
      }
    });
  }
}
