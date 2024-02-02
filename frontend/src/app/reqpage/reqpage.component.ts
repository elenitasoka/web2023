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
      const selectedGroup = this.listOfProducts.find((group:any) => group.name === this.searchText); //επιλογή αντικειμένων που έχουν το όνομα του searchText
     
      //αντίστροφη ταξινόμηση των Requests με βάση το ID και επιλογή του πρώτου.
      this.http.get("http://localhost:9992/Request/latest").subscribe((latestRequest: any) => {
      const latestRequestId = latestRequest.data.RequestID;
     
      //δημιουργία body δεδομένων που θα χρησιμοποιήσουμε για την δημιουργία Request
      const newRequest = {
        RequestID: latestRequestId + 1, // Χρήση της τιμής της i του τελευταίου request που δημιουργήθηκε με αύξηση κατά 1
        Uname: 'john doe', // 
        Uphone: 123456789, // 
        ReqDate: new Date(), // Σημερινή ημερωμηνία
        ProductId: selectedGroup.id, //χρήση του id με βάση το name που αναζητησε ο χρήστης
        "ProductName": this.searchText, // Χρησιμοποιούμε την τιμή από την αναζήτηση
        "Ammount": this.numberOfPeople, // Χρησιμοποιούμε την τιμή από το numberOfPeople
        PickupDate: '', 
        Status: false, 
        Vname: '' 
        
      };
      
      console.log(this.requestType);
      this.http.post("http://localhost:9992/Request/create", newRequest).subscribe((resultData: any) => {
        console.log(resultData);
        alert("Your request has been submitted successfully");
  
        this.requestType = '';
        this.numberOfPeople = 0;
      });
    });
  }
}
 
