import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstname:string="";
  lastname:string="";
  email:string="";
  password:string="";
  address: string = '';

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
      "address":this.address
    };
    this.http.post("http://localhost:9992/users/create", bodyData).subscribe((resultData: any)=>
    {
      console.log(resultData);
      alert("You have registered successfully");
    });
  }

  save()
  {
    this.register();
  }


}
