import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { of } from 'rxjs';
import { LoginUser } from '../models/login-user';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = "http://" + window.location.hostname + ":8080/api/auth/"

  constructor(private permissionsService: NgxPermissionsService, private http: HttpClient) { }

  login(userData: LoginUser): Observable<any> {
    // const headers = new HttpHeaders({Authorization: 'Basic '+ btoa(userData.username+':'+userData.password)})
    return this.http.post<LoginUser>(this.endpoint + 'signin', userData, httpOptions);
    /*const perm: any[] = [value];
    this.permissionsService.loadPermissions(perm);

    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', value);
    return of({ success: true, role: value });*/
  }

  register(user: User): Observable<any> {
    return this.http.post<LoginUser>(this.endpoint + 'signup', user, httpOptions);
    /*const perm: any[] = [value];
    this.permissionsService.loadPermissions(perm);

    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', value);
    return of({ success: true, role: value });*/
  }

  logout() {
    const perm: any[] = [];
    this.permissionsService.loadPermissions(perm);

    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: false, role: '' });
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    return loggedIn == 'true' ? true : false;
  }

  getRole() {
    const role = localStorage.getItem('ROLE') || "";
    return role;
  }
}
