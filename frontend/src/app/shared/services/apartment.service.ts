import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apartment } from '../models/apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  endpoint: string = "http://"+window.location.hostname+":8080/apartment"

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

  postApartment(apartment: Apartment, file: File) {
    let data = new FormData();
    data.append("type", apartment.type);
    data.append("description", apartment.description);
    data.append("amount", apartment.amount.toString());
    data.append("price", apartment.price.toString());
    data.append("file", file);
    this.http.post<Apartment>(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  putApartment(apartment: Apartment, id: number, file?: File) {
    let data = new FormData();
    data.append("type", apartment.type);
    data.append("description", apartment.description);
    data.append("amount", apartment.amount.toString());
    data.append("price", apartment.price.toString());
    if(file != null || file != ''){
      data.append("file", file!);
    }
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
