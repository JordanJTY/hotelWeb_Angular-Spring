import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  endpoint: string = "http://localhost:8080/apartment"

  constructor(private http: HttpClient) { }

  getAllApartments() {
    return this.http.get<Array<Apartment>>(this.endpoint);
  }

  getApartment(id: number) {
    return this.http.get<Apartment>(this.endpoint + "/" + id);
  }

  deleteAparment(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }

  postApartment(apartment: Apartment, blob: Blob) {
    let data = new FormData();
    data.append("type", apartment.type);
    data.append("desciption", apartment.description);
    data.append("amount", apartment.amount.toString());
    data.append("price", apartment.price.toString());
    data.append("file", blob);
    this.http.post<Apartment>(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  putApartment(apartment: Apartment, id: number, blob: Blob) {
    let data = new FormData();
    data.append("type", apartment.type);
    data.append("desciption", apartment.description);
    data.append("amount", apartment.amount.toString());
    data.append("price", apartment.price.toString());
    data.append("file", blob);
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
