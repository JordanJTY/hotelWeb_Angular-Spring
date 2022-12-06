import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelp } from 'src/app/shared/interfaces/data-help'
import { AuthService } from 'src/app/shared/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {
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
    console.log('si elevado a 4');
    // Put service to delete the user account and a alert to ask of the user is secure
    return false;
  }

  updateAuthInfo() {
    this.isLogin = this.authService.isLoggedIn();
    this.roleAs = this.authService.getRole();
  }
}
