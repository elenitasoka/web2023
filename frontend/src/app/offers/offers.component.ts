import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { loginData } from '../login/loginData.component';
import { waitForAsync } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offers', 
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
AnnouncementList:any;
Disable:any;
selectedProductName = "";
searchText = "";
offerQuantity: number | null=null;
Fname:any;
email:any;
disable: any[] = [];

showData(){ //sunarthsh gia na emfanisei ta stoixeia tou xrhsth sto console
  console.log("user data:",this.loginDataService.filteredUsers);
}

constructor(private http: HttpClient,public loginDataService: loginData){
  const firstUser = loginDataService.filteredUsers[0] || {};
  this.Fname = firstUser.firstname;
  this.email=firstUser.email;

  this.http.get("http://localhost:9992/announcement").subscribe((resultData: any) => {
        console.log(resultData);
        this.AnnouncementList = resultData.data.map((item: any) => ({
          ProductID: item.ProductID,
          ProductName: item.ProductName,
        }));
      
        
})

}
fetchProducts(http: HttpClient): void {
  http.get("http://localhost:9992/announcement").subscribe((resultData: any) => {
    console.log(resultData);
    this.disable = resultData.data.map((item: any) => ({
      ProductName: item.ProductName
    }));
  });
}

onProductNameClick(selectedGroup: any) {
  // Ορίζει την τιμή της selectedProductName ως το όνομα του επιλεγμένου group
  this.selectedProductName = selectedGroup.ProductName;
  // Ορίζει την τιμή της searchText ως το επιλεγμένο όνομα προϊόντος
  this.searchText = this.selectedProductName;
  // Καλεί τη συνάρτηση Search() για να ενημερώσει τον πίνακα βάσει της νέας τιμής
  this.Search();
}

//exei thema otan grafeis kai to svhneis
Search(){
  // alert(this.searchText)
  if(this.searchText!== ""){
    let searchValue = this.searchText.toLocaleLowerCase();
    
    this.AnnouncementList = this.AnnouncementList.filter((contact:any) =>{
      return contact.ProductName ? contact.ProductName.toLowerCase().includes(searchValue.toLowerCase()) : false;
      ;
    // you can keep on adding object properties here   
    
          });
        }
        else { 
          this.http.get("http://localhost:9992/announcement").subscribe((resultData: any) => {
    console.log(resultData);
    this.AnnouncementList = resultData.data.map((item: any) => ({
      ProductID: item.ProductID,
      ProductName: item.ProductName
    }));
  })               
          
          
        } 
    } 

    showPopup: boolean = false;
    
  
    isSubmitDisabled(): boolean {// Disable the submit button if searchText doesn't match any product name
      return !this.disable.some((product: any) => product.ProductName === this.searchText);
        
      }

      
 
    openPopup() {
      if (this.isSubmitDisabled()) {
        alert('Please select a valid product before submitting.');
        return;
      }
      this.showPopup = true;
    }
  
    closePopup() {
      this.showPopup = false;
    }
  
submit(){
  this.http.get("http://localhost:9992/offers/latest").subscribe((latestOffer: any) => {
        const latestOfferId = latestOffer.data.OfferID;
        console.log(latestOfferId);


  const selectedGroup = this.AnnouncementList.find((group:any) => group.ProductName === this.searchText); //επιλογή αντικειμένου που έχουν το όνομα του searchText
  console.log("erere",selectedGroup.ProductName);
  const newOffer = {
    OfferID: latestOfferId + 1,
    Uname:this.Fname,
    Email:this.email,
    OfferDate: new Date(),
    ProductId:selectedGroup.ProductID,
    ProductName:selectedGroup.ProductName,
    Ammount:this.offerQuantity,
    PickupDate: '', 
    Status: false, 
    Vname: ''

    
    
  };
  this.http.post("http://localhost:9992/offers/create", newOffer).subscribe((resultData: any) => {
          console.log(resultData);
          alert("Your request has been submitted successfully");
    
          this.searchText = '';
          this.offerQuantity=null;
          
          
        });
    });
    this.closePopup();
  }

ngOnInit(){
  this.fetchProducts(this.http);
}
}
