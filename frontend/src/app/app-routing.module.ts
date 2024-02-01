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
import { AdminComponent } from './admin/admin.component';
import { RescuerLoginComponent } from './rescuer-login/rescuer-login.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path:"userhome",
    component:UserhomeComponent
  }
 ,
  {
    path:'login',
    component: LoginComponent
  }, 

  {
    path:'',
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
