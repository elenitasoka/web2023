import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { loginData } from './loginData.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: loginData = new loginData();
  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  public filteredusers:any = [];
  UserDataService: any;
  userDataService: any;
  user:any;

  constructor(private router: Router,private http: HttpClient, private loginDataService: loginData) {}

  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password
    };

        this.http.post("http://localhost:9992/users/login", bodyData).subscribe(  async (resultData: any) => {
        console.log(resultData);
        

        if (resultData.status) 
        {
        
            this.router.navigateByUrl('/userhome');
            alert("You have successfully logged in");

            const usersResponse = await fetch('http://localhost:9992/users'); //pairnei kai epistrefei olous tous users apo th bash
            const usersData = await usersResponse.json(); //ta bazei se morfi json
          
            
            this.filteredusers = usersData.data.filter((user: any) => user.email === this.email);//επιλογή μόνο του χρήστη που κανει login με βαση το email του.
            this.loginDataService.filteredUsers = this.filteredusers; //επιστροφή των δεδομένων  στην service loginData με σκοπο την χρήση τους σε άλλα σημεία της εφαρμογής
           
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });


    } 
  }

