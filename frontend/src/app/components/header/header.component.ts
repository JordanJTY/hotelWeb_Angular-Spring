import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private storage: StorageService, private darkModeService: DarkModeService) { }

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  ngOnInit() { }

  onToggle() {
    this.darkModeService.toggle();
  }

  setActive() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu?.classList.toggle('active');
  }

  logout(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.storage.signOut();
        Swal.fire(
          'Done!',
          'Your session close correctly.',
          'success'
        ).then(function () {
          window.location.href = 'home';
        })
      }
    })
  }
}
