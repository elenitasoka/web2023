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
import { loginData } from '../rescuer-login/rescuerloginData.component';
import { RouterModule } from '@angular/router';
import { RescuerTasksMenuComponent } from '../rescuer-tasks-menu/rescuer-tasks-menu.component';
import { CommonModule } from '@angular/common';
import { RescuerVehicleCargoComponent } from '../rescuer-vehicle-cargo/rescuer-vehicle-cargo.component';
import { NewMapComponent } from '../new-map/new-map.component';


@Component({
  selector: 'app-rescuer-menu',
  standalone: true,
  imports: [NewMapComponent,RescuerVehicleCargoComponent, CommonModule, RescuerTasksMenuComponent, ListViewModule,SidebarModule,MatToolbarModule,MatButtonModule,MatListModule,MatIconModule,MatSidenavModule,FormsModule,ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, RouterModule],
  templateUrl: './rescuer-menu.component.html',
  styleUrls: ['./rescuer-menu.component.css']
})
export class RescuerMenuComponent {
  constructor(public loginDataService: loginData) {}
  events: string[] = [];
  opened!: boolean;  
  showRequestsAndOffers: boolean = false;
  showTaskPage: boolean = false;
  showVehicleCargo: boolean = false;
  showMap:boolean = false;

  showData(){ //sunarthsh gia na emfanisei ta stoixeia tou xrhsth sto console
    console.log("edwpera:",this.loginDataService.filteredUsers);
  
  } 
  
  ngOnInit() : void{
    setTimeout(() => {
      this.showData();
    }, 10000);
  }

  //gia na emfanizontai ta diaforetika components sto idio page
  toggleshowTaskPage() {
      this.showTaskPage = !this.showTaskPage;
    }

    toggleVehiclePage() {
      this.showVehicleCargo = !this.showVehicleCargo;
    }

    toggleNewMapPage() {
      this.showMap = !this.showMap;
    }
}