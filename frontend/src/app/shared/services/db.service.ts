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
      myStore2: 'id, endDate, startDate, apartment, user'
    });

    this.open()                             //opening the database
      .then(data => data)
      .catch(err => console.log(err.message));
    }
}

