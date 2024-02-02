import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { loginData } from '../login/loginData.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [ListViewModule,SidebarModule,MatToolbarModule,MatButtonModule,MatListModule,MatIconModule,MatSidenavModule,FormsModule,ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule,RouterModule],
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(public loginDataService: loginData) {}
  events: string[] = [];
  opened!: boolean;  
  showRequestsAndOffers: boolean = false;
  
  showData(){ //sunarthsh gia na emfanisei ta stoixeia tou xrhsth sto console
<<<<<<< HEAD
    //console.log(this.logindata.filteredUsers);
    console.log(this.logindata.filteredUsers[0]);
=======
    console.log("edwpera:",this.loginDataService.filteredUsers);
  
>>>>>>> 9d2170197ed252d519772cb760d9afa44665a19f
  } 
  
  ngOnInit() : void{
    setTimeout(() => {
      this.showData();
    }, 5000); //Υλοπο
  }


  
}

