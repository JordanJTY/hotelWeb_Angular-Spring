import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelp } from 'src/app/shared/interfaces/data-help'
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent {
  data: DataHelp[];
  isLogin = false;
  roleAs: string = "";

  ngOnInit(): void {
    this.updateAuthInfo();
  }

  constructor(private auth: AuthService, private router: Router, private storage: StorageService, private userService: UserService) {
    this.data = [
      {
        image: 'docTerms',
        title: 'Terms and Privacy Policy',
        href: ''
      },
      {
        image: 'infoAplicactionIcon',
        title: 'Application information',
        href: 'info'
      },
      {
        image: 'infoAdditionalIcon',
        title: 'Additional information',
        href: 'https://github.com/JordanJTY/hotelWeb_Angular-Spring'
      },
      {
        image: 'contacticon',
        title: 'Contact',
        href: 'contact'
      },
    ]
  }

  deleteAccount() {
    var dataUser = this.storage.getUser();
    console.log(dataUser.id)
    this.userService.deleteUser(dataUser.id);
    window.location.href = 'home';
    this.storage.signOut();
    return false;
  }

  updateAuthInfo() {
    this.isLogin = this.auth.isLoggedIn();
    this.roleAs = this.auth.getRole();
  }
}
