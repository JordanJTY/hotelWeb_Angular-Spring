import { Component, Input, OnInit } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent implements OnInit {

  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() apartment: Apartment = { amount: 0, type: '', image: '', description: '', price: 0 };
  endDateFormat: string = '';
  startDateFormat: string = '';
  typeApartment: string = '';

  constructor(private apartmentService: ApartmentService) {
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

  ngOnInit() {
    this.typeApartment = this.apartment.type;
    console.log(this.endDate)
    this.endDateFormat = this.formatDate(this.endDate);
    this.startDateFormat = this.formatDate(this.startDate);

  }
}
