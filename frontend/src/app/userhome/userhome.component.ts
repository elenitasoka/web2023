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
import { ReqpageComponent } from '../reqpage/reqpage.component';
import { CommonModule } from '@angular/common';
import { OffersComponent } from '../offers/offers.component';

@Component({
  selector: 'app-userhome',
  standalone: true,
  imports: [OffersComponent, CommonModule, ReqpageComponent, ListViewModule,SidebarModule,MatToolbarModule,MatButtonModule,MatListModule,MatIconModule,MatSidenavModule,FormsModule,ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule,RouterModule],
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(public loginDataService: loginData) {}

  events: string[] = [];
  opened!: boolean;  
  showRequestsAndOffers: boolean = false;
  showReqPage: boolean = false;
  showOffersPage: boolean = false;
  
  showData(){ //sunarthsh gia na emfanisei ta stoixeia tou xrhsth sto console
    console.log("user data:",this.loginDataService.filteredUsers);
  
  } 
  
  ngOnInit() : void{
    setTimeout(() => {
      this.showData();
    }, 5000); //καθυστερηση 5 δευτερολεπτα μεχρι 
  }

  //gia na emfanizontai ta diaforetika components sto idio page
  toggleshowReqPage() {
    this.showReqPage = !this.showReqPage;
  }

  toggleshowRequestsAndOffers(){
    this.showRequestsAndOffers =!this.showRequestsAndOffers;
  }

  toggleshowOffersPage(){
    this.showOffersPage =!this.showOffersPage;
  }


 
}

