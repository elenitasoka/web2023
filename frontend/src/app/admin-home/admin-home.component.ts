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
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminMenuComponent } from '../admin-menu/admin-menu.component';
import { NewRescuerComponent } from '../new-rescuer/new-rescuer.component';
import { DatabasecategoriesComponent } from '../databasecategories/databasecategories.component';
import { AnnouncementsComponent } from '../announcements/announcements.component';
import { InventoryComponent } from '../inventory/inventory.component';


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [InventoryComponent, AnnouncementsComponent, DatabasecategoriesComponent, NewRescuerComponent, AdminMenuComponent, CommonModule, ListViewModule,SidebarModule,MatToolbarModule,MatButtonModule,MatListModule,MatIconModule,MatSidenavModule,FormsModule,ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})

export class AdminHomeComponent {


  events: string[] = [];
  opened!: boolean;  
  showRequestsAndOffers: boolean = false;
  showDatabasePage: boolean = false;
  showNewRescuerPage: boolean = false;
  showAnnouncements: boolean = false;
  showInventory: boolean = false;


  //gia na emfanizontai ta diaforetika components sto idio page
  toggleshowDatabasePage() {
    this.showDatabasePage = !this.showDatabasePage;
  }

  toggleshowNewRescuerPage() {
    this.showNewRescuerPage = !this.showNewRescuerPage;
  }

  toggleshowAnnouncements(){
    this.showAnnouncements =!this.showAnnouncements;
  }
  toggleshowInventory(){
    this.showInventory=!this.showInventory;
  }

}
