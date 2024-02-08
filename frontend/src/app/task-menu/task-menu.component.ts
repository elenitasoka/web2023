import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-menu',
  standalone:true,
    imports:[CommonModule],
  templateUrl: './task-menu.component.html',
  styleUrl: './task-menu.component.css'
})
export class TaskMenuComponent {
  constructor(private http: HttpClient)
  {
  }

  public tasks: any[]= [];
  selectedTaskId: string | null = null;
  filteredOffers: any[] = [];
  
   ngOnInit(): void{
    this.loadTasks();
   }


   loadTasks() {
    this.http.get("http://localhost:9992/task").subscribe((resultData: any) => {
      console.log(resultData);
      this.tasks = resultData.data.map((item: any) => ({
        id: item.taskID,
        rescuerId: item.RescuerID,
        vehicle: item.Vname
      }));
    });
  }

  //sunarthsh gia tis leptomereies twn tasks (an einai offer/request)
  //thelw ta offers/requests pou to id tous einai idio me to id tou task
  async selectTask(taskId: string): Promise<void> {
    this.selectedTaskId = taskId;

    //fortwnei ola ta offers
    const offersResponse = await fetch(`http://localhost:9992/offers`);
    const offersData = await offersResponse.json();
   
    this.filteredOffers = offersData.data.filter((offer: any) => offer.OfferID === taskId);

    if (this.filteredOffers.length === 0) {
      //fortwnei ola ta requests
      const requestsResponse = await fetch(`http://localhost:9992/Request`);
      const requestsData = await requestsResponse.json();
      
      this.filteredOffers = requestsData.data.filter((request: any) => request.RequestID === taskId);
    }
        

  }

  goBack(): void {
    this.selectedTaskId = null;
  }


}
