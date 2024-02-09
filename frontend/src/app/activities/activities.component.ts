import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loginData } from '../login/loginData.component';
import { waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OffersComponent } from '../offers/offers.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
numberOfPeople:any;
RequestList:any;
OfferList:any;
FilteredOffers:any[] = [];
FilteredRequests:any[]=[];
Fname:any;
email:any;

constructor(private http: HttpClient,public loginDataService: loginData,private router: Router){
  const firstUser = loginDataService.filteredUsers[0] || {};
  this.Fname = firstUser.firstname;
  this.email=firstUser.email;

  this.http.get("http://localhost:9992/offers").subscribe((resultData: any) => {
        console.log(resultData);
        this.OfferList = resultData.data.map((item: any) => ({
          Email:item.Email,
          ProductName: item.ProductName,
          Ammount:item.Ammount,
          OfferDate:item.OfferDate,
          PickupDate:item.PickupDate,
          Status:item.Status,
          ID:item.OfferID
          
        }));
        this.FilteredOffers = this.OfferList.filter((offers:any) => offers.Email === this.email)
     
         
})
this.http.get("http://localhost:9992/Request").subscribe((resultData: any) => {
        console.log(resultData);
        this.RequestList = resultData.data.map((item: any) => ({
          Email:item.Email,
          ProductName: item.ProductName,
          Ammount:item.Ammount,
          ReqDate:item.ReqDate,
          PickupDate:item.PickupDate,
          Status:item.Status
        }));
        this.FilteredRequests = this.RequestList.filter((Requests:any) => Requests.Email === this.email)
         
})

}
deleteOffer(OfferID: number) {
  // Filter out the object with the given OfferID
  this.FilteredOffers = this.FilteredOffers.filter(offer => offer.ID !== OfferID);
}

cancel(ID:any){
    console.log(ID);
    this.http.delete(`http://localhost:9992/offers/${ID}`).subscribe(
      () => {
        console.log("Delete request successful");
        // Do anything else you need upon successful deletio
        this.FilteredOffers = this.OfferList.filter((offers:any) => offers.Email === this.email)
        this.deleteOffer(ID);
        console.log(this.FilteredOffers);
      },
      (error) => {
        console.error("Error occurred during delete request:", error);
        // Handle the error accordingly
      
      }
    );
  }
}

