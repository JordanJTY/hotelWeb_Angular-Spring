import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from 'src/app/shared/models/reservations';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationsPageComponent {

  reservations: Array<Reservations> = []

  constructor(private reservationsService: ReservationsService, private storage: StorageService, private router: Router) { }

  ngOnInit() {
    let data = this.reservationsService.getAllReservations();
    data.forEach(info => {
      let x = 0;
      for (let i = 0; i < info.length; i++) {
        if (this.storage.getUser().id == info[i].appUser.id) {
          this.reservations[x] = info[i];
          x++;
        }
      }
    })
  }

  checkOrder(id: number, index: number) {
    console.log(this.reservations[index].startDate);
    if (new Date(this.reservations[index].startDate).toISOString() == new Date().toISOString() || new Date(this.reservations[index].startDate).toISOString() < new Date().toISOString()) {
      Swal.fire({
        title: 'Do you want to delete your reservation?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.reservationsService.deleteReservation(id);
          Swal.fire(
            'Done!',
            'Your reservation has been deleted correctly.',
            'success'
          ).then(function () {
            window.location.reload()
          })
        }
      })
    } else {
    this.router.navigateByUrl(`/edit-order/${id}`);
    }
  }
}
