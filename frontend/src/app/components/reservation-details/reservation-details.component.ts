import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { Reservations } from 'src/app/shared/models/reservations';
import { User } from 'src/app/shared/models/user';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {
  @Input() id: number = 0;
  reservationData: Reservations = { endDate: new Date(), startDate: new Date(), apartment: new Apartment('', '', '', '', 0, 0), appUser: new User('', '', '', new Date()) };

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit() {
    this.reservationsService.getReservation(this.id).subscribe(
      data => {
        this.reservationData = data;
      }
    );
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

  formatDate(date: Date) {
    return (
      [
        new Date(date).getFullYear(),
        this.padTo2Digits(new Date(date).getMonth() + 1),
        this.padTo2Digits(new Date(date).getDate()),
      ].join('-')
    );
  }

  delete() {
    Swal.fire({
      title: 'Do you want to delete this reservation?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reservationsService.deleteReservation(this.id);
        Swal.fire(
          'Done!',
          'Your reservation has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'allReservations'
        })
      }
    })
  }
}
