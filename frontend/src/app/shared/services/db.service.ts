import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie{

  constructor() { 
    super("ako_hotel")

    this.version(1).stores({
      myStore1: 'id, amount, description, img, typeImg, price, type', 
      myStore2: 'id, endDate, startDate, apartmentId, userId',
      myStore3: 'id, email, username, password, dateBirth'
    });

    this.open()                             //opening the database
      .then(data => console.log("DB Opened"))
      .catch(err => console.log(err.message));
    }
}

