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
  selectedCategoryId: string | null = null;
  ngOnInit(): void
  {
    this.category();
  }

  category()
  {
    this.http.get("http://localhost:9992/category").subscribe((resultData: any) => {
     console.log(resultData);
     this.categories = resultData.data.map((item: any) => ({
      id: item.id,
      category: item.category
    }));

    console.log(this.categories);
  
    });
  }
   async getProductsByCategory(categoryId: string): Promise<void> {
    console.log(categoryId);
    const offersResponse = await fetch(`http://localhost:9992/product`);
    const offersData = await offersResponse.json();
     
      console.log(offersData);
      
         
       this.filteredOffers = offersData.data.filter((offer: any) => offer.category === categoryId);
      this.selectedCategoryId = categoryId;
      console.log("Selected Category ID:", this.selectedCategoryId);

      console.log(this.filteredOffers);
   
    }
    goBack(): void {
      this.selectedCategoryId = null;
    }
    
    
  }
