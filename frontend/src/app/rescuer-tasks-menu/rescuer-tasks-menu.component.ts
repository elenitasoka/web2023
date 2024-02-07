import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginData } from '../rescuer-login/rescuerloginData.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rescuer-tasks-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rescuer-tasks-menu.component.html',
  styleUrl: './rescuer-tasks-menu.component.css'
})
export class RescuerTasksMenuComponent implements OnInit {

  constructor(private http: HttpClient, public loginDataService: loginData) {}
  public tasks: any[]= [];
  selectedTaskId: string | null = null;
  filteredTasks: any[] = [];
  filteredOffers: any[] = [];



  ngOnInit(): void{
    this.showTasks();
   }

  //synartisi pou emfanizei ta tasks pou exoun ws orisma idio rescuerid me to id tou rescuer
  async showTasks(): Promise<void> {
    const tasksResponse = await fetch(`http://localhost:9992/task`);
    const tasksData = await tasksResponse.json();
    
    this.tasks = tasksData.data;  //ekxwrisi twn dedomenwn sta tasks

    //pairnei to id apo ta stoixeia tou rescuer
    const id = this.loginDataService.filteredUsers.map((user: any) => user.ID);

    this.filteredTasks = tasksData.data.filter((task: any) => task.RescuerID === id[0]);

    console.log("Filtered Users:", this.loginDataService.filteredUsers);
    console.log("Filtered Tasks:", this.filteredTasks);
    console.log("Rescuer ID:", id);
    console.log("Tasks Data:", tasksData);
  } 

  async selectTask(taskId: string): Promise<void> {
    this.selectedTaskId = taskId;
    
    console.log("Task id1:", this.selectedTaskId);
  
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
        
    console.log("Task id:", taskId);
    console.log("Filtered Offers:", this.filteredOffers);
  }

  goBack(): void {
    this.selectedTaskId = null;
  }
}
