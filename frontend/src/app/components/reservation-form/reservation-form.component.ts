import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { Reservations } from 'src/app/shared/models/reservations';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {

  apartmentData: Apartment = { amount: 0, type: '', image: '', description: '', price: 0 }
  idApartment: number = 0;
  public reservationForm: FormGroup;
  actualDate: any = new Date().toISOString().split('T')[0];
  equalsDate: boolean = false;

  constructor(private storage: StorageService, private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService, private reservationsService: ReservationsService) {
    this.reservationForm = this.createForm();
  }

  ngOnInit() {
    this.idApartment = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.apartmentService.getApartment(this.idApartment).subscribe(data => {
      this.apartmentData = data
    })
  }

  get startDate() { return this.reservationForm.get('startDate'); }
  get endDate() { return this.reservationForm.get('endDate'); }

  createForm() {
    return new FormGroup({
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
    });
  }

  compareDate(): any {
    let from_date = this.startDate?.value;
    let to_date = this.endDate?.value;
    var fromdate = from_date.split('-');
    from_date = new Date();
    from_date.setFullYear(fromdate[2], fromdate[1] - 1, fromdate[0]);
    var todate = to_date.split('-');
    to_date = new Date();
    to_date.setFullYear(todate[2], todate[1] - 1, todate[0]);
    if (from_date > to_date || from_date.toISOString() == to_date.toISOString()) {
      this.equalsDate = true;
      console.log(this.equalsDate);
    } else {
      this.equalsDate = false;
    }
  };

  getDayDiff(): number {
    const msInDay = 24 * 60 * 60 * 1000;
    let num = Math.round(Math.abs(Number(new Date(this.endDate?.value)) - Number(new Date(this.startDate?.value))) / msInDay);
    if (isNaN(num) || num == null || this.equalsDate) {
      return 0;
    } else { return num }

  }

  submit() {
    if (this.reservationForm.valid && !this.equalsDate) {
      let reservation: Reservations = {endDate: this.endDate?.value, startDate: this.startDate?.value, apartment: this.apartmentData, appUser: this.storage.getUser() };
      console.log(reservation);
      // Swal.fire('Proceso terminado. Gracias por contactar con nosotros.').then(respuesta => {
      this.reservationsService.postReservation(reservation);
      window.location.href = 'home';
      // });
    } else {
      // Swal.fire('Debe rellenar todos los campos.').then(respuesta => {
      // });
    }
  }
}
