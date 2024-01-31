import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-Requestpage',
  templateUrl: './Requestpage.component.html',
  styleUrls: ['./Requestpage.component.css']
})

export class RequestpageComponent {
  title = 'angular13';
  searchText = "";
  listOfContacts:any ;
  constructor(private http: HttpClient){
    //get request from web api
      this.http.get("http://localhost:9992/category").subscribe((resultData: any) => {
       console.log(resultData);
       this.listOfContacts = resultData.data.map((item: any) => ({
        id: item.id,
        category: item.category
      }));
    });
  }

  Search(){
    // alert(this.searchText)
     if(this.searchText!== ""){
       let searchValue = this.searchText.toLocaleLowerCase();
       
       this.listOfContacts = this.listOfContacts.filter((contact:any) =>{
        return contact.category ? contact.category.toLowerCase().includes(searchValue.toLowerCase()) : false;
         ;
       // you can keep on adding object properties here   
       
             });
             
             console.log(this.listOfContacts);
           }
           else { 
            this.http.get("http://localhost:9992/category").subscribe((resultData: any) => {
       console.log(resultData);
       this.listOfContacts = resultData.data.map((item: any) => ({
        id: item.id,
        category: item.category
      }));
    })               
             // if(this.searchText== ""){ you don't need this if
             
           } 
       }
}
