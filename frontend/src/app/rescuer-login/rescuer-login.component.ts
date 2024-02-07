import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { loginData } from './rescuerloginData.component';

@Component({
  selector: 'app-rescuer-login',
  templateUrl: './rescuer-login.component.html',
  styleUrls: ['./rescuer-login.component.css']
})
export class RescuerLoginComponent {
  loginData: loginData = new loginData();
  email: string = '';
  password: string = '';
  isLogin: boolean = true;
  erroMessage: string = "";
  UserDataService: any;
  userDataService: any;
  public filteredusers:any = [];
  user:any;

  constructor(private router: Router,private http: HttpClient, private loginDataService: loginData) {}
  login() {
    console.log(this.email);
    console.log(this.password);

    let bodyData = {
      email: this.email,
      password: this.password
    };

        this.http.post("http://localhost:9992/rescuer/login", bodyData).subscribe(  async (resultData: any) => {
        console.log(resultData);
        

        if (resultData.status) 
        {
          
            this.router.navigateByUrl('/rescuerMenu');
            alert("You have successfully logged in");

            const rescuersResponse = await fetch('http://localhost:9992/rescuer'); //pairnei kai epistrefei olous tous users apo th bash
            const rescuersData = await rescuersResponse.json(); //ta bazei se morfi json
          
            console.log(rescuersData);
          
          
            this.filteredusers = rescuersData.data.filter((user: any) => user.email === this.email);//επιλογή μόνο του χρήστη που κανει login με βαση το email του.
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
