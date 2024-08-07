import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MapComponent } from './map/map.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { RequestpageComponent } from './Requestpage/Requestpage.component';
import { ReqpageComponent } from './reqpage/reqpage.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AdminComponent } from './admin/admin.component';
import { RescuerLoginComponent } from './rescuer-login/rescuer-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RescuerMenuComponent } from './rescuer-menu/rescuer-menu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewRescuerComponent } from './new-rescuer/new-rescuer.component';
import { NewMapComponent } from './new-map/new-map.component';
import { OffersComponent } from './offers/offers.component';
import { RescuerTasksMenuComponent } from './rescuer-tasks-menu/rescuer-tasks-menu.component';
import { RescuerVehicleCargoComponent } from './rescuer-vehicle-cargo/rescuer-vehicle-cargo.component';
import { TaskMenuComponent } from './task-menu/task-menu.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ChartsComponent } from './charts/charts.component';
import { DatabasecategoriesComponent } from './databasecategories/databasecategories.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path:'userhome',
    component:UserhomeComponent
  }
 ,
  {
    path:'login',
    component: LoginComponent
  }, 

  {
    path:'',
    component: FirstPageComponent
  }, 
  {
    path:'userPage',
    component: HomeComponent
  }, 

  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'map',
    component:MapComponent
  },
  {
    path:'admin-menu',
    component:AdminMenuComponent
  },
  {
    path:'Requestpage',
    component:RequestpageComponent
  },
  {
    path:'reqpage',
    component:ReqpageComponent
   },
   {
    path:'admin',
    component:AdminComponent
   },

  {
    path:'rescuer-login',
    component:RescuerLoginComponent
  },

  {
    path:'sidenav',
    component:SidenavComponent
  },
  {
    path:'rescuerMenu',
    component:RescuerMenuComponent
  },
  {
    path:'adminHome',
    component:AdminHomeComponent
  },
  {
    path:'newRescuerForm',
    component:NewRescuerComponent
   },
   {
    path:'new-map',
    component:NewMapComponent
   },
  {
   path:"offers",
   component:OffersComponent
  },

  {
    path:"rescuerTaskMenu",
    component:OffersComponent
  },
  {
    path:"rescuerTaskMenu",
    component:RescuerTasksMenuComponent
   },
   {
    path:"rescuerVehicleCargo",
    component:RescuerVehicleCargoComponent
   },
   {
    path:"rescuerTasksMenu",
    component:RescuerTasksMenuComponent
   },
   {
    path:"tasksMenu",
    component:TaskMenuComponent
   }, 

   {
     path:'activities',
     component: ActivitiesComponent
   },
   {
   path:'chart',
    component:ChartsComponent
   },
   {
    path:"Databasecategories",
    component:DatabasecategoriesComponent
   },
   {
    path:"announcements",
    component:AnnouncementsComponent
   },
   {path:"inventory",
   component:InventoryComponent
  },
  {
    path:"loginAdmin",
    component:AdminLoginComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
