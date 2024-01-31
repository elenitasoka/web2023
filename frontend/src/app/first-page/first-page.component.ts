import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent {


  userType:string='';

  constructor(private router: Router) {}


  navigateToPage() {
    if (this.userType === 'Administrator') {
      this.router.navigate(['/admin-page']);  
    } else if (this.userType === 'Rescuer') {
      this.router.navigate(['rescuer-login']);  
    } else if (this.userType === 'User') {
      this.router.navigate(['userPage']);  
    } else {
      this.router.navigate(['']);
    }
  }
  
  

}
