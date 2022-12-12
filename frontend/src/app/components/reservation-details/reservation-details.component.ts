import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { Reservations } from 'src/app/shared/models/reservations';
import { User } from 'src/app/shared/models/user';
import { ReservationsService } from 'src/app/shared/services/reservations.service';

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

  delete(){
    if(true){
      // this.reservationsService.deleteReservation(this.id);
      console.log(this.id)
    } else {

    }
  }
}
