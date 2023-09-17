// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(email: string, password: string): Observable<boolean> {
    // Implement your authentication logic here.
    // Check if the provided email and password are valid.
    if (email === 'admin@example.com' && password === 'adminpassword') {
      this.isAuthenticated = true;
      return of(true); // Return an Observable of true for success.
    }
    this.isAuthenticated = false;
    return of(false); // Return an Observable of false for failure.
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
