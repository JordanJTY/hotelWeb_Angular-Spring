import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  endpoint: string = "http://" + window.location.hostname + ":8080/reservation";

  constructor(private http: HttpClient, private userService: UserService) { }

  getInvoice(idUser: number, idReservation: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.endpoint + '/exportInvoice', { responseType: 'blob', params: { idUser: idUser, idReservation: idReservation } })
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, (error) => { console.log(error) });
  }

  getDataReservations(year: number) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.get(this.endpoint + '/exportAverageReservationData', { responseType: 'blob', params: { year: year } })
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, (error) => { console.log(error) });
  }

  getUserReservations(username: string) {
    let headers = new HttpHeaders();
    let users = this.userService.getAllUser();
    let idUser = 0;
    users.forEach(data => {
      for (let x = 0; x < data.length; x++) {
        if (data[x].username == username) {
          idUser = data[x].id!;
        }
      }
    }).then(() => {
      headers = headers.set('Accept', 'application/pdf');
      return this.http.get(this.endpoint + '/exportUserReservations', { responseType: 'blob', params: { idUser: idUser } })
        .subscribe(response => {
          const file = new Blob([response], { type: 'application/pdf' });
          const fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        }, (error) => { console.log(error) });
    })

  }
}
