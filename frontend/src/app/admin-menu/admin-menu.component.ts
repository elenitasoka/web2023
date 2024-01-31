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
   getProductsByCategory(categoryId: string): void {
    console.log(categoryId);
     this.http.get(`http://localhost:9992/product/filter/${categoryId}`).subscribe((resultData: any) => {
      console.log(resultData);
      this.selectedCategoryProducts = resultData.data.map((item: any) => ({
       id: item.id,
       name: item.name
     }));
        console.log(this.selectedCategoryProducts);    

    });
    }

  }
