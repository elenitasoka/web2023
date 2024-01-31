import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rescuer-login',
  templateUrl: './rescuer-login.component.html',
  styleUrls: ['./rescuer-login.component.css']
})
export class RescuerLoginComponent {
  email: string = '';
  password: string = '';
  filteredRescuers: any= [];
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

        this.http.post("http://localhost:9992/rescuer/login", bodyData).subscribe(  async (resultData: any) => {
        console.log(resultData);
        

        if (resultData.status) 
        {
          
            this.router.navigateByUrl('/admin-menu');
            alert("You have successfully logged in");

            const rescuersResponse = await fetch('http://localhost:9992/rescuer'); //pairnei kai epistrefei olous tous users apo th bash
            const rescuersData = await rescuersResponse.json(); //ta bazei se morfi json
          
            console.log(rescuersData);
          
          
            this.filteredRescuers = rescuersData.data.filter((rescuer: any) => rescuer.email === this.email);
          
            console.log(this.filteredRescuers);
           
        }
        
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });


    } 
}
