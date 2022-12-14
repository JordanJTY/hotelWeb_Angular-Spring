import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { Reservations } from 'src/app/shared/models/reservations';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-order-form',
  templateUrl: './edit-order-form.component.html',
  styleUrls: ['./edit-order-form.component.scss']
})
export class EditOrderFormComponent {

  idReservation: number = 0;
  apartmentData: Apartment =  { amount: 0, type: '', image: '', description: '', price: 0 }
  order: Reservations = {endDate: new Date(), startDate: new Date(), apartment: this.apartmentData, appUser: this.storage.getUser() }
  public orderForm: FormGroup;
  actualDate: any = new Date().toISOString().split('T')[0];
  equalsDate: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private reservationsService: ReservationsService, private storage: StorageService) {
    this.orderForm = this.createForm();
  }

  ngOnInit() {
    this.idReservation = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.reservationsService.getReservation(this.idReservation).subscribe(
      data => {
        this.apartmentData = data.apartment
      }
    )
  }

  get startDate() { return this.orderForm.get('startDate'); }
  get endDate() { return this.orderForm.get('endDate'); }

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
    if (this.orderForm.valid && !this.equalsDate) {
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
          this.reservationsService.putReservation(reservation, this.idReservation);
          Swal.fire(
            'Done!',
            'Your order has been updated correctly.',
            'success'
          ).then(function () {
            window.location.href = 'reservations';
          })
        }
      })
    }
  }
}
