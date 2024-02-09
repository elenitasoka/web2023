import { Component } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-new-map',
  standalone: true,
  imports: [],
  templateUrl: './new-map.component.html',
  styleUrl: './new-map.component.css'
})
export class NewMapComponent {
  

 
  constructor() { }
  map!: L.Map;


  ngOnInit() {
    this.initializeMap();
  }

  initializeMap() {
    this.map = L.map('map').setView([38.2448, 21.7346], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadUsers();
    
  }

  async loadUsers() {
    const users = await fetch('http://localhost:9992/rescuer');
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

        this.addUserToMap(user.usename, lat, lon);
        console.log(user.usename, lat, lon)
      }        
      console.log(geoData);


    }
  }

  addUserToMap(username: string, lat: number, lon: number) {
    L.marker([lat, lon]).addTo(this.map)
      .bindPopup(username)
      .openPopup();
  }
}

