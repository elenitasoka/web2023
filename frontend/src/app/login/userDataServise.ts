// user-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private userData: any;

  constructor(private http: HttpClient) {}

  // Μέθοδος για τη φόρτωση των δεδομένων του χρήστη από τον server
  loadUserData() {
    return this.http.get<any>('/users/login'); // Αντικαταστήστε το μονοπάτι ανάλογα με τον server σας
  }

  // Μέθοδος για την επιστροφή των δεδομένων του χρήστη
  getUserData() {
    return this.userData;
  }
}
