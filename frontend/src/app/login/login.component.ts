import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  UserDataService: any;
  userDataService: any;

  constructor(private router: Router,private http: HttpClient) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password
    };

        this.http.post("http://localhost:9992/users/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
        

        if (resultData.status) 
        {
          //this.UserDataService.loadUserData().subscribe((userData: any) => {
            // Αποθηκεύστε τα δεδομένα του χρήστη στο UserDataService
            //this.userDataService.setUserData(userData);
            //console.log(userData);
            this.router.navigateByUrl('/admin-menu');
            alert("You have successfully logged in");
           
        }
        
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });


    } 
  }

