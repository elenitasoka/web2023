import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent {
  constructor(private http: HttpClient)
  {
  }
  public categories: any[] = []; 
  selectedCategoryProducts: any[] = [];
  filteredOffers: any[] = [];
  categoryId=0;
  selectedProductId: string | null = null;
  selectedCategoryId: string | null = null;
  selectedName: string | null = null;
  selectedProduct: any;
  selectedProductQuantity: number | undefined;
  formVisible: boolean = false;
  ngOnInit(): void
  {
    this.category();
  }

  category()
  {
    //aitima http get pros to sugkekrimeno url
    this.http.get("http://localhost:9992/category").subscribe((resultData: any) => {
    //ektupwsi twn dedomenwn pou epesrepse o server
    console.log(resultData);
    //epexergasia twn dedomenwn gia th dhmiourgia neou pinaka categories
     this.categories = resultData.data.map((item: any) => ({
      id: item.id,
      category: item.category
    }));

    console.log(this.categories);
  
    });
  }
   async getProductsByCategory(categoryId: string): Promise<void> {
    console.log(categoryId);

    //apostoli aitimatos http gia tin anaktisi twn proiontwn apo ton server
    const offersResponse = await fetch(`http://localhost:9992/product`);
    //anamoni gia thn apokrish kai metatropi tous se json
    const offersData = await offersResponse.json();
     
      console.log(offersData);
      
      //filtrarisma twn proiontwn basi ths epilegmenhs kathgorias
      this.filteredOffers = offersData.data.filter((offer: any) => offer.category === categoryId);
      this.selectedCategoryId = categoryId;
      console.log("Selected Category ID:", this.selectedCategoryId);

      console.log(this.filteredOffers);
   
    }
    goBack(): void {
      this.selectedCategoryId = null;
      this.formVisible = false;
    }
    
    selectProduct(productId: any,productName:any) {
      // Υλοποιήστε τη λογική που χρειάζεστε για την επιλογή προϊόντος
      this.selectedProduct = productId/* Επιλεγμένο προϊόν */;
      this.selectedName=productName;
      this.formVisible = true;
      // Υποθέτουμε ότι έχετε μια μέθοδο onSubmit
      this.onSubmit();
    }
  
    // Υποθέτουμε ότι έχετε μια μέθοδο onSubmit
    onSubmit() {
      // Εδώ μπορείτε να υλοποιήσετε τη λογική που χρειάζεστε για την υποβολή της φόρμας
      this.formVisible = true;
    }
    informdatabase(){
      console.log("pame ligo");
      console.log(this.selectedProduct);
      console.log(this.selectedName);
      console.log(this.selectedProductQuantity);
      let bodyData =
      {
        "category": this.selectedCategoryId,
        "name": this.selectedName,
        "ProductID": this.selectedProduct,
        "Ammount":this.selectedProductQuantity
      };
      this.http.post("http://localhost:9992/database/create", bodyData).subscribe((resultData: any)=>
      {
        console.log(resultData);
        alert("You have added the items succesfully");
      });
     
      this.selectedCategoryId = null;
      this.selectedName=null;
      

    }
  }
