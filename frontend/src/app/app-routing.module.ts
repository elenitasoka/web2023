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
   }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
