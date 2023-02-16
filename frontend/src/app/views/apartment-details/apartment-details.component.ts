import { Component, Input, Inject, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import 'aframe'
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss'],
})
export class ApartmentDetailsComponent {

  apartment: Apartment = { amount: 0, type: '', image: '', description: '', price: 0 };
  id: any;
  panoViewer: any;

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private db: DbService, private dialogRef: MatDialogRef<ApartmentDetailsComponent>, private apartmentService: ApartmentService, private router: Router) {
    this.id = data.id;

  }

  goLogin() {
    this.dialogRef.close();
    window.location.href = '/login'
  }

  order() {
    this.dialogRef.close();
    this.router.navigateByUrl(`/order/${this.id}`);
  }

  ngOnInit() {
    this.db.table('myStore1').get(this.id).then(data => {
      console.log(data)
      this.apartment = new Apartment(data.type, data.img, data.typeImg, data.description, data.price, data.amount, data.id)
    })
  }
}
