import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  OfferList: any;
  VnameTableO: any;
  VnameTableR: any;
  VnameTable: any;
  RequestList: any;
  ProductList: any;
  productTable: any;

  constructor(private http: HttpClient)
  {
  }

  ngOnInit(): void
  {
    this.getData();
    //emfanizei sto Vehicle Table ola ta offers kai requests me Vname 
    setTimeout(() => {console.log("Vehicle Table:", this.VnameTable = this.VnameTableR.concat(this.VnameTableO)
    )}, 2000);
  }

  getData(){

    //pairnoume ta products tou database
  this.http.get("http://localhost:9992/database").subscribe((resultData: any) => {
    console.log(resultData);
      this.ProductList = resultData.data.map((item: any) => ({
      name:item.name,
      ProductID:item.ProductID,
      Ammount:item.Ammount
    }));
  
    console.log("Product Table", this.ProductList );

  })

    //apothikeuoume ola ta offers ths bashs sto offerList
  this.http.get("http://localhost:9992/offers").subscribe((resultData: any) => {
      console.log(resultData);
        this.OfferList = resultData.data.map((item: any) => ({
        Vname:item.Vname,
        ProductName:item.ProductName,
        ProductId:item.ProductId

      }));
      
     //apo ta offers pairnoume mono osa exoun  Vname
      this. VnameTableO= this.OfferList.filter((Offers: any) => {
        return !!Offers.Vname;
      });
      console.log("Vehicle Table O:", this. VnameTableO );

    })

    //apothikeuoume ola ta requests ths bashs sto RequestList  
  this.http.get("http://localhost:9992/Request").subscribe((resultData: any) => {
    console.log(resultData);
      this.RequestList = resultData.data.map((item: any) => ({
      Vname:item.Vname,
      ProductName:item.ProductName,
      ProductId:item.ProductId
    }));
         
     //apo ta requests pairnoume mono osa exoun  Vname
     this.VnameTableR = this.RequestList.filter((Requests: any) => {
      return !!Requests.Vname;
    });

    console.log("Vehicle Table R:", this.VnameTableR );
    })


  }
}