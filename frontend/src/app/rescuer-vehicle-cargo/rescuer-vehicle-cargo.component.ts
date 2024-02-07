import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { loginData } from '../rescuer-login/rescuerloginData.component';

@Component({
  selector: 'app-rescuer-vehicle-cargo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rescuer-vehicle-cargo.component.html',
  styleUrl: './rescuer-vehicle-cargo.component.css'
})
export class RescuerVehicleCargoComponent {

  constructor(private http: HttpClient, public loginDataService: loginData) {}
  public tasks: any[]= [];
  selectedVehicleName: string | null = null;
  filteredVehicles: any[] = [];
  filteredOffers: any[] = [];
  filteredRequests: any[] = [];

  
  ngOnInit(): void {
    this.vehicleCargo();

}


   async vehicleCargo(): Promise<void> {
    
    //pairnv to Vname
    const VName = this.loginDataService.filteredUsers.map((user: any) => user.Vname);

    console.log("Filtered Users:", this.loginDataService.filteredUsers);

    //fortwnei ola ta offers
    const offersResponse = await fetch(`http://localhost:9992/offers`);
    const offersData = await offersResponse.json();

    console.log("Offers Data:", offersData);

    this.filteredOffers = offersData.data.filter((offer: any) => offer.Vname === VName[0]);
    console.log("Filtered Offers:", this.filteredOffers);

    //fortwnei ola ta requests
    const requestsResponse = await fetch(`http://localhost:9992/Request`);
    const requestsData = await requestsResponse.json();
      
    console.log("Requests Data:", requestsData);

    this.filteredRequests = requestsData.data.filter((request: any) => request.Vname === VName[0]);
    

    console.log("Vehicle Name:", VName);
    console.log("Filtered Requests:", this.filteredRequests);
  }

}
