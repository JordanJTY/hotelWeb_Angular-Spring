import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataHelp } from 'src/app/shared/interfaces/data-help'
import { AuthService } from 'src/app/shared/services/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

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
  }

  constructor(private auth: AuthService, private router: Router, private storage: StorageService, private userService: UserService) {
    this.data = [
      {
        image: 'docTerms',
        title: 'Help system',
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(dataUser.id);
        this.storage.signOut();
        Swal.fire(
          'Done!',
          'Your account has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'home';
        })
      }
    })
    return false;
  }

}
