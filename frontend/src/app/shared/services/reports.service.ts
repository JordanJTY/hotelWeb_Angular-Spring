import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  endpoint: string = "http://" + window.location.hostname + ":8080/reservation";

  constructor(private http: HttpClient) { }

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
    return this.http.get(this.endpoint + '/exportData', { responseType: 'blob', params: { year: year } })
      .subscribe(response => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }, (error) => { console.log(error) });
  }
}
