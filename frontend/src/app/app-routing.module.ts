import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MapComponent } from './map/map.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { RescuerMenuComponent } from './rescuer-menu/rescuer-menu.component';

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
    path:'rescuer-menu',
    component:RescuerMenuComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
