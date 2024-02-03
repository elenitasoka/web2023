import { Injectable } from '@angular/core';


//gia na pairnei ta stoixeia tou xrhsth se ola ta component

@Injectable({
  providedIn: 'root',
})
export class loginData {
    public filteredUsers: any[] = [];
    
}
