import { Component } from '@angular/core';
import * as L from 'leaflet';
import { loginData } from '../rescuer-login/rescuerloginData.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-map',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-map.component.html',
  styleUrl: './new-map.component.css'
})
export class NewMapComponent {
  

 
  constructor(public loginDataService:loginData) { }
  map!: L.Map;
  vehlag:number=0;
  vehlng:number=0;
  selectedDataType:string='all';
  private mapDataLayerGroup: L.LayerGroup = L.layerGroup();
  currentTasks:any[] = [];
  filteredOffers: any[] = [];
  filteredRecuest: any[] = [];
  taskDetails:any[] = [];
  visible: boolean = false;

  ngOnInit() {
    this.initializeMap();
    this.setupEventListeners();
    this.setupeventListeners();
    this.loadTasks();

  }
   async loadTasks(){
    const Vname=this.loginDataService.filteredUsers[0].Vname
    
    const tasks = await fetch('http://localhost:9992/task');
    const tasksData = await tasks.json();
    console.log(tasksData)
    for( const task of tasksData.data){
      if(task.Vname==Vname){
        console.log(task.Vname)
        const offersResponse = await fetch(`http://localhost:9992/offers`);
        const offersData = await offersResponse.json();
       
        this.filteredOffers = offersData.data.filter((offer: any) => offer.OfferID ===task.taskID);
        console.log(this.filteredOffers)
    
        if (this.filteredOffers.length === 0) {
          //fortwnei ola ta requests
          const requestsResponse = await fetch(`http://localhost:9992/Request`);
          const requestsData = await requestsResponse.json();
          
          this.filteredOffers  = requestsData.data.filter((request: any) => request.RequestID===task.taskID );
          console.log(this.filteredOffers)
        }
        this.taskDetails.push(...this.filteredOffers);
      console.log(this.taskDetails);
        console.log(this.taskDetails)
      }
    }


  }
  initializeMap() {
     this.map = L.map('map').setView([38.2448, 21.7346], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadUsers();
    this.loadRescuer();
    this.addDatabase();
    this.addVehicle();
    
  }

  async loadRescuer(){
    const address=this.loginDataService.filteredUsers[0].address;
    const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
      const geoData = await geoResponse.json();

      if (geoData.features && geoData.features.length > 0) {
        const { lat, lon } = geoData.features[0].properties;

        this.addRescuerToMap(lat, lon);
        console.log( lat, lon)
  }
}

  async loadUsers() {
    console.log(this.loginDataService.filteredUsers[0].Vname)
    const Vname=this.loginDataService.filteredUsers[0].Vname;
    
    const users = await fetch('http://localhost:9992/users');
    const userData = await users.json();
    console.log(userData)
    for (const user of userData.data) {
      const address = user.address;
      console.log(address)
      // Κλήση του Geoapify Geocoding API για να πάρει τις γεωγραφικές συντεταγμένες
      const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
      const geoData = await geoResponse.json();

      if (geoData.features && geoData.features.length > 0) {
        const { lat, lon } = geoData.features[0].properties;

        this.addUserToMap(user.firstname, lat, lon);
        console.log(user.firstname, lat, lon)
             
      console.log(geoData);


      const usersoffers = await fetch('http://localhost:9992/offers');
      const useroffersData = await usersoffers.json();
      
      for(const offer of useroffersData.data){
          if(offer.Uname==user.firstname)
          {
            if(!offer.Vname){
            this.addOfferToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
            console.log(offer.OfferID,offer.ProductName)
            }
            if(offer.Vname== Vname && offer.Status === false){
              this.addOfferRescuerToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
              console.log(offer.OfferID,offer.ProductName,offer.Vname)
              console.log('AYTO PREPEI NA EINAI MPLE')


            }
          }

      }
      const usersrequest= await fetch('http://localhost:9992/Request');
      const userrequestData = await usersrequest.json();
      
      for(const request of userrequestData.data){

          if(request.Uname==user.firstname)
          { if(!request.Vname){
            this.addRequestToMap(request.RequestID,request.ProductName,lat,lon,request.Uname,request.Email,request.ReqDate,request.Ammount,request.ProductId,request.PickupDate,request.Vname);
            console.log(request.RequestID,request.ProductName)
          }
          if(request.Vname== Vname && request.Status === false){
            this.addRequestRescuerToMap(request.RequestID,request.ProductName,lat,lon,request.Uname,request.Email,request.ReqDate,request.Ammount,request.ProductId,request.PickupDate,request.Vname);
            console.log(request.OfferID,request.ProductName,request.Vname)
            console.log('AYTO PREPEI NA EINAI MPLE')


          }
        }

      }

    }
    }
  }


  addRequestRescuerToMap(RequestID:number, ProductName:string, lat:number, lon:number, Uname:string, Email:string, ReqDate:Date, Ammount:number, ProductId:number, PickupDate:Date, Vname:string){
    const offsetLat = lat + (Math.random() - 0.5) * 0.0005;
    const offsetLon = lon + (Math.random() - 0.5) * 0.0005;
    let popupContent = `
      <b>Request ID:</b> ${RequestID} <br>
      <b>Product Name:</b> ${ProductName} <br>
      <b>User Name:</b> ${Uname} <br>
      <b>Email:</b> ${Email} <br>
      <b>Request Date:</b> ${ReqDate} <br>
      <b>Amount:</b> ${Ammount} <br>
      <b>Product ID:</b> ${ProductId} <br>
      <b>Pickup Date:</b> ${PickupDate} <br>
      <b>Vehicle Name:</b> ${Vname} <br>
    `;

    L.circleMarker([offsetLat, offsetLon], {
      radius: 8,
      color: 'blue',
      fillOpacity: 1,
    })
    .addTo(this.map)
    .bindPopup(popupContent)
    .openPopup();
  }


  addOfferRescuerToMap(OfferID:number, ProductName:string, lat:number, lon:number, Uname:string, Email:string, ReqDate:Date, Ammount:number, ProductId:number, PickupDate:Date, Vname:string){
    const offsetLat = lat + (Math.random() - 0.5) * 0.0005;
    const offsetLon = lon + (Math.random() - 0.5) * 0.0005;
    let popupContent = `
      <b>Offer ID:</b> ${OfferID} <br>
      <b>Product Name:</b> ${ProductName} <br>
      <b>User Name:</b> ${Uname} <br>
      <b>Email:</b> ${Email} <br>
      <b>Request Date:</b> ${ReqDate} <br>
      <b>Amount:</b> ${Ammount} <br>
      <b>Product ID:</b> ${ProductId} <br>
      <b>Pickup Date:</b> ${PickupDate} <br>
      <b>Vehicle Name:</b> ${Vname} <br>
    `;

    L.circleMarker([offsetLat, offsetLon], {
      radius: 8,
      color: 'Purple',
      fillOpacity: 1,
    })
    .addTo(this.map)
    .bindPopup(popupContent)
    .openPopup();
  }



  addUserToMap(username: string, lat: number, lon: number) {
    const userIcon = L.divIcon({
      
      html: '<i class="fa-solid fa-user"></i>',
      iconSize: [32, 32],
      iconAnchor: [32, 32],
      popupAnchor: [0, -36]
  
    });

    const marker = L.marker([lat, lon], { icon: userIcon }).bindPopup(username);
    marker.addTo(this.map);
    
  }

  addDatabase(){
    const DatabaseIcon = L.divIcon({
      
      html: '<i class="fa-solid fa-store"></i>',
      iconSize: [32, 32],
      iconAnchor: [32, 32],
      popupAnchor: [0, -36]
  
    });

    const marker = L.marker([38.2497745,21.7376414 ], { icon: DatabaseIcon }).bindPopup("DATABASE!");
    marker.addTo(this.map);
  }
  addVehicle(){
    const baseCoordinates = L.latLng(38.2497745, 21.7376414);

  var marker = L.marker([38.25467813085261, 21.739625930786133], {
    draggable: true
  }).addTo(this.map);

  marker.on('dragend', (event) => {
    const vehicleLatLng = event.target.getLatLng();
    const distanceToBase = this.map.distance(baseCoordinates, vehicleLatLng);

    if (distanceToBase <= 100) {
      // Καλέστε τη συνάρτηση που θέλετε εδώ, αφού ο μαρκαδόρος βρίσκεται 100 μέτρα από τη βάση
     console.log('ALLA3ES THESH')
     this.handleVehicleWithinDistance();
    }
  });

  }
   handleVehicleWithinDistance() {
    // Λογική όταν ο μαρκαδόρος είναι εντός ακτίνας 100 μέτρων από τη βάση
    this.visible=true;
  
    
    }
  

  
  addRescuerToMap( lat: number, lon: number){
    const rescuerIcon = L.divIcon({
      
      html: '<i class="fa-solid fa-kit-medical"></i>',
      iconSize: [32, 32],
      iconAnchor: [32, 32],
      popupAnchor: [0, -36]
  
    });

    const marker = L.marker([lat, lon], { icon: rescuerIcon }).bindPopup("YOU ARE HERE!");
    marker.addTo(this.map);

  }
  addOfferToMap(OfferID:number, ProductName:string, lat:number, lon:number, Uname:string, Email:string, ReqDate:Date, Ammount:number, ProductId:number, PickupDate:Date, Vname:string)
  {
    const offsetLat = lat + (Math.random() - 0.5) * 0.0005;
    const offsetLon = lon + (Math.random() - 0.5) * 0.0005;
  
    // Δημιουργία του HTML string με τα δεδομένα προσφοράς
    let popupContent = `
      <b>Offer ID:</b> ${OfferID} <br>
      <b>Product Name:</b> ${ProductName} <br>
      <b>User Name:</b> ${Uname} <br>
      <b>Email:</b> ${Email} <br>
      <b>Request Date:</b> ${ReqDate} <br>
      <b>Amount:</b> ${Ammount} <br>
      <b>Product ID:</b> ${ProductId} <br>
      <b>Pickup Date:</b> ${PickupDate} <br>
      <b>Vehicle Name:</b> ${Vname} <br>
    `;
  
    // Προσθήκη του κουμπιού "Λήψη" μόνο όταν το Vname είναι κενό
    if (!Vname) {
      popupContent += `<button class="downloadButton" data-offer-id="${OfferID}">Λήψη</button>`;
  
    }
    
    L.circleMarker([offsetLat, offsetLon], {
      radius: 8,
      color: 'green',
      fillOpacity: 1,
    })
    .addTo(this.map)
    .bindPopup(popupContent)
    .openPopup();
   
  }

  addRequestToMap(RequestID:number,ProductName:string,lat:number,lon:number,Uname:String,Email:string,ReqDate:Date,Ammount:number,ProductId:number,PickupDate:Date,Vname:string)
  {
    const offsetLat = lat + (Math.random() - 0.5) * 0.0007; // Προσθήκη τυχαίου offset
    const offsetLon = lon + (Math.random() - 0.5) * 0.0007;
    let popupContent = `
    <b>Request ID:</b> ${RequestID} <br>
    <b>Product Name:</b> ${ProductName} <br>
    <b>User Name:</b> ${Uname} <br>
    <b>Email:</b> ${Email} <br>
    <b>Request Date:</b> ${ReqDate} <br>
    <b>Amount:</b> ${Ammount} <br>
    <b>Product ID:</b> ${ProductId} <br>
    <b>Pickup Date:</b> ${PickupDate} <br>
    <b>Vehicle Name:</b> ${Vname} <br>
  `;
   // Προσθήκη του κουμπιού "Λήψη" μόνο όταν το Vname είναι κενό
   if (!Vname) {
    popupContent += `<button class="downloadButtonn" data-request-id="${RequestID}">Λήψη</button>`;
  }
    L.circleMarker([offsetLat, offsetLon],{
      radius: 8,
      color: 'red', // Χρώμα του marker (π.χ., κόκκινο)
      fillOpacity: 1,
    })
    .addTo(this.map)
      .bindPopup(popupContent)
      .openPopup();
  }
  public downloadOffer(offerID:number) {
    // Εδώ μπορείτε να προσθέσετε τον κώδικα για τη λειτουργικότητα λήψης
    console.log(`Λαμβάνετε την προσφορά με ID: `,offerID);
  }
  setupEventListeners() {
    // Use event delegation to handle click events for download buttons
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('downloadButton')) {
        const offerID = parseInt(target.dataset['offerId'] || '0', 10);
        this.downloadOffer(offerID);
      }
    });
  }
  setupeventListeners() {
    // Use event delegation to handle click events for download buttons
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('downloadButtonn')) {
        const requestID = parseInt(target.dataset['requestId'] || '0', 10);
        this.downloadrequest(requestID);
      }
    });
  }
  public downloadrequest(requestId:number) {
    // Εδώ μπορείτε να προσθέσετε τον κώδικα για τη λειτουργικότητα λήψης
    console.log(`Λαμβάνετε το request με ID: `,requestId);
  }


  async filterMap(selectedDataType:string){

    switch (selectedDataType) {
      case 'acceptedRequests':
        this.map.eachLayer(layer => {
          this.map.removeLayer(layer);
        });
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
  
        this.addDatabase();
        this.addVehicle();
  
      const Vname3=this.loginDataService.filteredUsers[0].Vname;
      const users3 = await fetch('http://localhost:9992/users');
      const userData3 = await users3.json();
      
  
      for (const user of userData3.data) {
        const address = user.address;
        console.log(address)
        // Κλήση του Geoapify Geocoding API για να πάρει τις γεωγραφικές συντεταγμένες
        const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
        const geoData = await geoResponse.json();
  
        if (geoData.features && geoData.features.length > 0) {
          const { lat, lon } = geoData.features[0].properties;
  
          this.addUserToMap(user.firstname, lat, lon);
          console.log(user.firstname, lat, lon)
              
        console.log(geoData);
  
  
        const usersrequest= await fetch('http://localhost:9992/Request');
        const userrequestData = await usersrequest.json();
        
            for(const request of userrequestData.data){
              if(request.Vname){
                if(request.Vname== Vname3 && request.Status === false){
                  this.addRequestRescuerToMap(request.OfferID,request.ProductName,lat,lon,request.Uname,request.Email,request.ReqDate,request.Ammount,request.ProductId,request.PickupDate,request.Vname);
                  console.log(request.OfferID,request.ProductName,request.Vname)
                  console.log('AYTO PREPEI NA EINAI MPLE')


                }
                 else if (request.Vname !== Vname3) {
                  this.addRequestToMap(request.OfferID,request.ProductName,lat,lon,request.Uname,request.Email,request.ReqDate,request.Ammount,request.ProductId,request.PickupDate,request.Vname);
                   console.log(request.OfferID,request.ProductName)
                }
              }
            
          }
  
        
      }
    }

        break;
      case 'pendingRequests':
       
      this.map.eachLayer(layer => {
        this.map.removeLayer(layer);
      });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      this.addDatabase();
      this.addVehicle();

    const Vname2=this.loginDataService.filteredUsers[0].Vname;
    const users2 = await fetch('http://localhost:9992/users');
    const userData2 = await users2.json();
    

    for (const user of userData2.data) {
      const address = user.address;
      console.log(address)
      // Κλήση του Geoapify Geocoding API για να πάρει τις γεωγραφικές συντεταγμένες
      const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
      const geoData = await geoResponse.json();

      if (geoData.features && geoData.features.length > 0) {
        const { lat, lon } = geoData.features[0].properties;

        this.addUserToMap(user.firstname, lat, lon);
        console.log(user.firstname, lat, lon)
            
      console.log(geoData);


      const usersrequest= await fetch('http://localhost:9992/Request');
      const userrequestData = await usersrequest.json();
      
          for(const request of userrequestData.data){

          if(request.Uname==user.firstname)
          { if(!request.Vname){
            this.addRequestToMap(request.RequestID,request.ProductName,lat,lon,request.Uname,request.Email,request.ReqDate,request.Ammount,request.ProductId,request.PickupDate,request.Vname);
            console.log(request.RequestID,request.ProductName)
          }
          
        }

      }
    }
  }

        break;
      case 'pendingOffers':
        this.map.eachLayer(layer => {
          this.map.removeLayer(layer);
        });
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);

        this.addDatabase();
        this.addVehicle();

      const Vname1=this.loginDataService.filteredUsers[0].Vname;
      const users1 = await fetch('http://localhost:9992/users');
      const userData1 = await users1.json();
      

      for (const user of userData1.data) {
        const address = user.address;
        console.log(address)
        // Κλήση του Geoapify Geocoding API για να πάρει τις γεωγραφικές συντεταγμένες
        const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
        const geoData = await geoResponse.json();

        if (geoData.features && geoData.features.length > 0) {
          const { lat, lon } = geoData.features[0].properties;

          this.addUserToMap(user.firstname, lat, lon);
          console.log(user.firstname, lat, lon)
              
        console.log(geoData);


        const usersoffers = await fetch('http://localhost:9992/offers');
        const useroffersData = await usersoffers.json();
        console.log(Vname1);
        for(const offer of useroffersData.data){
            if(offer.Uname==user.firstname)
            {
              
            //  if(offer.Vname=!Vname){
           //   this.addOfferToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
           //   console.log(offer.OfferID,offer.ProductName)
          //    }
          if(!offer.Vname){
            this.addOfferToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
            console.log(offer.OfferID,offer.ProductName)
            }
            }

        }
      }
    }
    
        break;
      case 'receivedOffers':
              this.map.eachLayer(layer => {
                this.map.removeLayer(layer);
              });
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
              }).addTo(this.map);

              this.addDatabase();
              this.addVehicle();
      
            const Vname=this.loginDataService.filteredUsers[0].Vname;
            const users = await fetch('http://localhost:9992/users');
            const userData = await users.json();
            

            for (const user of userData.data) {
              const address = user.address;
              console.log(address)
              // Κλήση του Geoapify Geocoding API για να πάρει τις γεωγραφικές συντεταγμένες
              const geoResponse = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=02593b05671d4be59411b8568b7efeb8`);
              const geoData = await geoResponse.json();

              if (geoData.features && geoData.features.length > 0) {
                const { lat, lon } = geoData.features[0].properties;

                this.addUserToMap(user.firstname, lat, lon);
                console.log(user.firstname, lat, lon)
                    
              console.log(geoData);


              const usersoffers = await fetch('http://localhost:9992/offers');
              const useroffersData = await usersoffers.json();
              console.log(Vname);
              for(const offer of useroffersData.data){
                  if(offer.Uname==user.firstname)
                  {
                    if(offer.Vname){
                    if(offer.Vname== Vname && offer.Status === false){
                      this.addOfferRescuerToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
                      console.log(offer.OfferID,offer.ProductName,offer.Vname)
                      console.log('AYTO PREPEI NA EINAI MPLE')


                    }
                     else if (offer.Vname !== Vname) {
                      this.addOfferToMap(offer.OfferID,offer.ProductName,lat,lon,offer.Uname,offer.Email,offer.ReqDate,offer.Ammount,offer.ProductId,offer.PickupDate,offer.Vname);
                       console.log(offer.OfferID,offer.ProductName)
                    }
                  }
                }
              }
            }
          }
        break;
      default:
        // Εμφανίστε όλα τα δεδομένα
        break;
    }


  }
}

