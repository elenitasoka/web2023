import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reqpage',
  templateUrl: './reqpage.component.html',
  styleUrls: ['./reqpage.component.css']
})
export class ReqpageComponent {
  title = 'angular13';
  searchText = "";
  selectedProductName = "";
  listOfProducts:any ;
  requestType: string = '';
  numberOfPeople: number | null=null;
  i: number = 1;

  constructor(private http: HttpClient){
    //get request from web api
      this.http.get("http://localhost:9992/product").subscribe((resultData: any) => {
       console.log(resultData);
       this.listOfProducts = resultData.data.map((item: any) => ({
        id: item.id,
        name: item.name
      }));
    });
 } 

Search(){
  // alert(this.searchText)
   if(this.searchText!== ""){
     let searchValue = this.searchText.toLocaleLowerCase();
     
     this.listOfProducts = this.listOfProducts.filter((contact:any) =>{
      return contact.name ? contact.name.toLowerCase().includes(searchValue.toLowerCase()) : false;
       ;
     // you can keep on adding object properties here   
     
           });
           
           console.log(this.listOfProducts);
         }
         else { 
          this.http.get("http://localhost:9992/product").subscribe((resultData: any) => {
     console.log(resultData);
     this.listOfProducts = resultData.data.map((item: any) => ({
      id: item.id,
      name: item.name
    }));
  })               
           // if(this.searchText== ""){ you don't need this if
           
         } 
     }  
     onProductNameClick(selectedGroup: any) {
      // Ορίζει την τιμή της selectedProductName ως το όνομα του επιλεγμένου group
      this.selectedProductName = selectedGroup.name;
      // Ορίζει την τιμή της searchText ως το επιλεγμένο όνομα προϊόντος
      this.searchText = this.selectedProductName;
      // Καλεί τη συνάρτηση Search() για να ενημερώσει τον πίνακα βάσει της νέας τιμής
      this.Search();
    }
    submitRequest() {
      const newRequest = {
        RequestID: this.i++, // Χρήση της τρέχουσας τιμής της i και αύξηση κατά 1
        Uname: 'john doe', // Συμπληρώστε με τον κατάλληλο τρόπο
        Uphone: 123456789, // Συμπληρώστε με τον κατάλληλο τρόπο
        ReqDate: new Date(), // Συμπληρώστε με τον κατάλληλο τρόπο
        ProductId: 1, // Συμπληρώστε με τον κατάλληλο τρόπο
        "ProductName": this.searchText, // Χρησιμοποιούμε την τιμή από το requestType
        "Ammount": this.numberOfPeople, // Χρησιμοποιούμε την τιμή από το numberOfPeople
        PickupDate: '', // Συμπληρώστε με τον κατάλληλο τρόπο
        Status: false, // Συμπληρώστε με τον κατάλληλο τρόπο
        Vname: '' // Συμπληρώστε με τον κατάλληλο τρόπο
        
      };
      console.log(this.requestType);
      this.http.post("http://localhost:9992/Request/create", newRequest).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Your request has been submitted successfully");
  
        this.requestType = '';
        this.numberOfPeople = 0;
      });
    }
  }