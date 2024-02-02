import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-rescuer',
  templateUrl: './new-rescuer.component.html',
  styleUrl: './new-rescuer.component.css'
})
export class NewRescuerComponent {
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string="";
  userType: string = '';

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData =
    {
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
      "role":this.userType
    };
    this.http.post("http://localhost:9992/users/create", bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("You have created a new rescuer successfully");
    });
  }

  save()
  {
    this.register();
  }
}
