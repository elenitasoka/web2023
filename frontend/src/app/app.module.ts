import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { MapComponent } from './map/map.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RequestpageComponent } from './Requestpage/Requestpage.component';
import { ReqpageComponent } from './reqpage/reqpage.component';
import { RescuerLoginComponent } from './rescuer-login/rescuer-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FirstPageComponent } from './first-page/first-page.component';
import { NewRescuerComponent } from './new-rescuer/new-rescuer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewMapComponent } from './new-map/new-map.component';
import { OffersComponent } from './offers/offers.component';
import { RescuerTasksMenuComponent } from './rescuer-tasks-menu/rescuer-tasks-menu.component';
import { RescuerVehicleCargoComponent } from './rescuer-vehicle-cargo/rescuer-vehicle-cargo.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChartsComponent } from './charts/charts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { AdminComponent } from './admin/admin.component';
import { DatabasecategoriesComponent } from './databasecategories/databasecategories.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MapComponent,
    RequestpageComponent,
    RescuerLoginComponent,
    FirstPageComponent,
   
    
    
    

    
    FirstPageComponent 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AdminLoginComponent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
