import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hotelAko';
  roles: string[];

  constructor(private storage: StorageService, private permissionsService: NgxPermissionsService) {
    this.roles = this.storage.getUser().roles;
  }

  ngOnInit(): void {
    // this.updateAuthInfo();
    if (this.storage.getToken()) {
      const perm: any[] = [this.roles];
      this.permissionsService.loadPermissions(perm);
    }
    console.log(this.storage.getToken())
  }
}
