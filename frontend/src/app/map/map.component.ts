import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
declare const L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  private mymap: any;

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }


    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      this.mymap = L.map('map').setView(latLong, 13);
      var myLayer = L.geoJSON().addTo(this.mymap);
      
    

    



    async function getMarkets() {
      const res = await fetch('http://localhost:9992/markets');
      const data = await res.json();
    
      const markets = data.data.map((market:any) => {

        return {
          type: 'Feature',
          properties: {
            storeId: market.storeid,
            icon: 'shop',
          },
          geometry: {
            type: 'Point',
            coordinates: [
              market.geometry.coordinates[0],
              market.geometry.coordinates[1]
            ]
          },
          
        };

      });
     


L.geoJSON(markets, {
  onEachFeature: onEachFeature,
}).addTo(myLayer);



// Συνάρτηση για να ελέγχει αν το storeId υπάρχει στον πίνακα offers

      async function onEachFeature(feature:any, layer:any) {
  const storeId = feature.properties.storeId;

  const isStoreInOffers = await checkIfStoreInOffers(storeId);
  
    let popupContent = '<table style="border-collapse: collapse; width: 100%;">';
    popupContent += '<tr><td colspan="2" style="text-align: center; font-weight: bold;">Προσφορές Καταστήματος</td></tr>';


    if (isStoreInOffers) {
     

  // Κάντε ένα αίτημα για να λάβετε τις προσφορές
  const offersResponse = await fetch(`http://localhost:9992/offers`);
  const offersData = await offersResponse.json();
      const storeOffers = offersData.data.filter((offer: any) => offer.storeid === storeId);
      console.log(storeOffers);

      
      storeOffers.forEach((offer: any) => {
        const price = offer.prices;
        const product = offer.productName;
    
        popupContent += '<tr style="border: 1px solid #ccc;">'; // Προσθέστε μια νέα γραμμή στον πίνακα
        popupContent += `<td style="border: 1px solid #ccc;">Τιμή: ${price} €</td>`;
        popupContent += `<td style="border: 1px solid #ccc;">Προϊόν: ${product}</td>`;
        popupContent += '</tr>'; // Κλείστε τη γραμμή

      });
    
      popupContent = '<table>' + popupContent + '</table>'; // Προσθέστε τον πίνακα

      layer.bindPopup(popupContent);



      L.circleMarker(layer.getLatLng(), {
        radius: 8,
        color: 'green', // Χρώμα του marker (π.χ., κόκκινο)
        fillOpacity: 1,
      }).addTo(myLayer);
    }
    else{
      L.circleMarker(layer.getLatLng(), {
        radius: 8,
        color: 'red', // Χρώμα του marker (π.χ., κόκκινο)
        fillOpacity: 1,
      }).addTo(myLayer);
      
    }
       
  }
  // Συνάρτηση για να ελέγχει αν το storeId υπάρχει στον πίνακα offers
async function checkIfStoreInOffers(storeId:any) {
  const offersResponse = await fetch(`http://localhost:9992/offers`);
  const offersData = await offersResponse.json();

  const storeIds = offersData.data.map((offer:any) => offer.storeid);
  if (storeIds.includes(storeId)) {
    console.log('Το storeId υπάρχει στις προσφορές');
    return true;
  }


console.log('Το storeId δεν υπάρχει στις προσφορές');
return false;

}
  
}
  
getMarkets();



async function getFilterMarkets(selectedCategory: any){
  myLayer.clearLayers();
  const res = await fetch('http://localhost:9992/markets');
  const data = await res.json();

  const markets = data.data.map((market:any) => {

    return {
      type: 'Feature',
      properties: {
        storeId: market.storeid,
        icon: 'shop',
      },
      geometry: {
        type: 'Point',
        coordinates: [
          market.geometry.coordinates[0],
          market.geometry.coordinates[1]
        ]
      },
      
    };

  });
 


L.geoJSON(markets, {
onEachFeature: filteronEachFeature,
}).addTo(myLayer);


async function filteronEachFeature(feature:any, layer:any) {
  const storeId = feature.properties.storeId;



  let popupContent = '<table style="border-collapse: collapse; width: 100%;">';
  popupContent += '<tr><td colspan="2" style="text-align: center; font-weight: bold;">Προσφορές Καταστήματος</td></tr>';

  const offersResponse = await fetch(`http://localhost:9992/offers`);
  const offersData = await offersResponse.json();

  const OffersWithCategory = offersData.data.filter((offer: any) => offer.productCategory === selectedCategory);
  console.log("mexri edw kala");

  const storeOffers = OffersWithCategory.filter((offer: any) => offer.storeid === storeId);
  console.log(storeOffers);

  if(storeOffers.length>0){
  storeOffers.forEach((offer: any) => {
    const price = offer.prices;
    const product = offer.productName;

    popupContent += '<tr style="border: 1px solid #ccc;">'; // Προσθέστε μια νέα γραμμή στον πίνακα
    popupContent += `<td style="border: 1px solid #ccc;">Τιμή: ${price} €</td>`;
    popupContent += `<td style="border: 1px solid #ccc;">Προϊόν: ${product}</td>`;
    popupContent += '</tr>'; // Κλείστε τη γραμμή

  });

  popupContent = '<table>' + popupContent + '</table>'; // Προσθέστε τον πίνακα

  layer.bindPopup(popupContent);



  L.circleMarker(layer.getLatLng(), {
    radius: 8,
    color: 'green', // Χρώμα του marker (π.χ., κόκκινο)
    fillOpacity: 1,
  }).addTo(myLayer);

  }
  else{
    L.circleMarker(layer.getLatLng(), {
      radius: 8,
      color: 'red', // Χρώμα του marker (π.χ., κόκκινο)
      fillOpacity: 1,
    }).addTo(myLayer);
  }
  
}
}
const categoryDropdown = document.getElementById("categoryDropdown");
const selectedCategoryElement = document.getElementById("selectedCategory");

if (categoryDropdown) {
  categoryDropdown.addEventListener("click", function (event) {
    if (event.target instanceof HTMLElement) {
      event.preventDefault(); // Αποτρέπει τη μεταφορά στην αρχική σελίδα

      // Βρίσκουμε την επιλεγμένη κατηγορία από το data-category της επιλογής
      const selectedCategory = event.target.getAttribute("data-category");
      getFilterMarkets(selectedCategory);

    }
  });
}



    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(this.mymap);


      let marker = L.marker(latLong).addTo(this.mymap);

    marker.bindPopup('<b>You Are Here</b>').openPopup();

      let popup = L.popup()
        .setLatLng(latLong)
        .setContent('Your Location')
        .openOn(this.mymap);
    });
    this.watchPosition();
    
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
  

  }
  
  
  



