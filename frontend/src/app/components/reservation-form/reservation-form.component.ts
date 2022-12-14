import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { Reservations } from 'src/app/shared/models/reservations';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

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
    if (this.endDate?.value < this.startDate?.value || this.endDate?.value == this.startDate?.value) {
      this.equalsDate = true;
      console.log(this.startDate?.value + ' - ' + this.endDate?.value);
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
      let reservation: Reservations = { endDate: this.endDate?.value, startDate: this.startDate?.value, apartment: this.apartmentData, appUser: this.storage.getUser() };
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
          this.reservationsService.postReservation(reservation);
          Swal.fire(
            'Done!',
            'Your order has been done correctly.',
            'success'
          ).then(function () {
            window.location.href = 'home';
          })
        }
      })
    }
  }
}
