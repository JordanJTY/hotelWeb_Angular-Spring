import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservations } from '../models/reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  endpoint: string = "http://"+window.location.hostname+":8080/reservation"

  constructor(private http: HttpClient) { }

  getAllReservations() {
    return this.http.get<Array<Reservations>>(this.endpoint);
  }

  getReservation(id: number) {
    return this.http.get<Reservations>(this.endpoint + "/" + id);
  }

  deleteReservation(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }

  postReservation(reservations: Reservations) {
    let data = new FormData();
    data.append("endDate", reservations.endDate.toString());
    data.append("startDate", reservations.startDate.toString());
    data.append("apartment", reservations.apartment.id!.toString());
    data.append("appUser", reservations.appUser.id!.toString());
    this.http.post<Reservations>(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  putReservation(reservations: Reservations, id: number) {
    let data = new FormData();
    data.append("endDate", reservations.endDate.toString());
    data.append("startDate", reservations.startDate.toString());
    data.append("apartment", reservations.apartment.id!.toString());
    data.append("appUser", reservations.appUser.id!.toString());
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });

  }
}
