import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = "http://" + window.location.hostname + ":8080/user"

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get<Array<User>>(this.endpoint);
  }

  getUser(id: number) {
    return this.http.get<User>(this.endpoint + "/" + id);
  }

  deleteUser(id: number) {
    this.http.delete(this.endpoint + "/" + id).subscribe(data => { });
  }

  postUser(user: User) {
    let data = new FormData();
    data.append("email", user.email);
    data.append("username", user.username);
    data.append("password", user.password);
    data.append("dateBirth", user.dateBirth.toString());
    this.http.post<User>(this.endpoint, data).subscribe(response => { }, (error) => { console.log(error) });
  }

  putUser(user: User, id: number) {
    let data = new FormData();
    data.append("email", user.email);
    data.append("username", user.username);
    data.append("password", user.password);
    data.append("dateBirth", user.dateBirth.toString());
    this.http.put(this.endpoint + "/" + id, data).subscribe(response => { }, (error) => { console.log(error) });
  }
}
