import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../login/loginData.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.css'
})
export class AnnouncementsComponent {

  title = 'angular13';
  searchText = "";
  selectedProductName = "";
  listOfProducts:any ;
  requestType: string = '';
  //i: number = 1;
  Fname:any;
  email:any;

  showData(){ //sunarthsh gia na emfanisei ta stoixeia tou xrhsth sto console
    console.log("user data:",this.loginDataService.filteredUsers);
  } 

  constructor(private http: HttpClient,public loginDataService: loginData){

    //φόρτωση των προϊόντων
      this.http.get("http://localhost:9992/product").subscribe((resultData: any) => {
      console.log(resultData);
      this.listOfProducts = resultData.data.map((item: any) => ({
        id: item.id,
        name: item.name,
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
        }
        else { 
          this.http.get("http://localhost:9992/product").subscribe((resultData: any) => {
          console.log(resultData);
          this.listOfProducts = resultData.data.map((item: any) => ({
          id: item.id,
          name: item.name
        }));
  })
          
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
    submitAnnouncement() {
      const selectedGroup = this.listOfProducts.find((group:any) => group.name === this.searchText); //επιλογή αντικειμένων που έχουν το όνομα του searchText
  
    
      //δημιουργία body δεδομένων που θα χρησιμοποιήσουμε για την δημιουργία Request
      const newRequest = {
        ProductID: selectedGroup.id, //χρήση του id με βάση το name που αναζητησε ο χρήστης
        ProductName: this.searchText, // Χρησιμοποιούμε την τιμή από την αναζήτηση
      };
      
      this.http.post("http://localhost:9992/announcement/create", newRequest).subscribe((resultData: any) => {
        console.log("apotelesma:", resultData);
        alert("Your announcement has been submitted successfully");
  
        this.searchText = '';
        this.Search();
        
      });
  
  }
  ngOnInit() : void{
    setTimeout(() => {
      console.log("Fname:",this.Fname);
    }, 5000); //καθυστερηση 5 δευτερολεπτα μεχρι 
  }

 

// Example usage




}


