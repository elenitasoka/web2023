import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-new-rescuer',
  standalone: true, 
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './new-rescuer.component.html',
  styleUrl: './new-rescuer.component.css'
})

export class NewRescuerComponent {
  rescuerID!: number;
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
      "rescuerID": this.rescuerID,
      "firstname": this.firstname,
      "lastname": this.lastname,
      "email": this.email,
      "password": this.password,
      "address":this.address
    };
    this.http.post("http://localhost:9992/rescuer/create", bodyData).subscribe((resultData: any)=>
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
