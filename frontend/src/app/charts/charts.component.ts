import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
Chart.register(...registerables);
@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnInit {
  StartDate: Date | null = null;
  EndDate: Date | null = null;
  OfferList:any;
  RequestList:any;
  newRequests:any;
  newOffers:any;
  completedRequests:any; 
  completedOffers:any; 
 
  constructor(private http: HttpClient) {}
  ngOnInit() {
  
    this.getData();
 
  }
  getData(StartDate?: Date | null, EndDate?: Date | null) {
    console.log("StartDate", StartDate);
    try {
      const startDate: Date = new Date(StartDate!);
      const formattedStartDate: string = moment(startDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      const endDate:Date = new Date(EndDate!);
      const formattedEndDate: string = moment(endDate).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      console.log("hellooo", formattedStartDate , formattedEndDate);

    this.http.get("http://localhost:9992/offers").subscribe((resultData: any) => {
      console.log(resultData);
         this.OfferList = resultData.data.map((item: any) => ({
        OfferDate:item.OfferDate,
        PickupDate:item.PickupDate,
        Status:item.Status
      }));
      if (this.StartDate !== null) {
       
        this.completedOffers = this.OfferList.filter((Offers: any) => {
          
          return Offers.Status === true && Offers.OfferDate >= formattedStartDate && Offers.OfferDate <= formattedEndDate ;
        });

        this.newOffers = this.OfferList.filter((Offers: any) => {
          
          return Offers.Status === false && Offers.OfferDate >= formattedStartDate && Offers.OfferDate <= formattedEndDate ;
        });
      }
      else{
      this.completedOffers = this.OfferList.filter((offers:any) => offers.Status === true)
      this.newOffers = this.OfferList.filter((offers:any) => offers.Status === false)
      //console.log(" offers count:", this.OfferList,this.newOffers);
      }
   
  
    })



    this.http.get("http://localhost:9992/Request").subscribe((resultData: any) => {
        console.log(resultData);
        this.RequestList = resultData.data.map((item: any) => ({
          ReqDate:item.ReqDate,
          PickupDate:item.PickupDate,
          Status:item.Status
          
        }));

        if (this.StartDate !== null) {
          console.log("mphkame if", this.StartDate !== null);
          this.completedRequests = this.RequestList.filter((Requests: any) => {
            
            return Requests.Status === true && Requests.ReqDate >= formattedStartDate && Requests.ReqDate <= formattedEndDate ;
            console.log("completeted",this.completedRequests);
          });

          this.newRequests = this.RequestList.filter((Requests: any) => {
            
            return Requests.Status === false && Requests.ReqDate >= formattedStartDate && Requests.ReqDate <= formattedEndDate ;
          });
        }
        else{
          console.log("den mphkame if",this.StartDate !== null);
        this.completedRequests = this.RequestList.filter((Requests:any) => Requests.Status === true)
      this.newRequests = this.RequestList.filter((Requests:any) => Requests.Status === false)
      //console.log(this.RequestList.filter((Requests:any) => Requests.Status === false));
  //console.log(" reqs count:", this.newRequests,this.completedRequests);
        }
})


setTimeout(() => {
  this.createChart();
  this.StartDate = null;
  this.EndDate = null;
}, 2000);

} catch (error) {
  console.error("Error fetching data:", error);
}
finally {
  // Επαναφορά των μεταβλητών σε null
  
}

console.log()


 }
 createChart() {
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const existingChart = Chart.getChart(ctx);
  if (existingChart) {
    existingChart.destroy(); // Καταστροφή του υπάρχοντος γραφήματος
  }

  
  //console.log("1",this.newRequests ,"2", this.newOffers,"3", this.completedRequests ,"4",this.completedOffers);
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Νέα Αιτήματα',  'Διεκπεραιωμένα Αιτήματα','Νέες Προσφορές', 'Διεκπεραιωμένες Προσφορές'],
      datasets: [{
        label: 'Στατιστικά',
        data: [this.newRequests.length, this.completedRequests.length, this.newOffers.length ,this.completedOffers.length],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          type:'linear',
          beginAtZero: true
        }
      }
    }
  });
  return myChart; 
}
} 
