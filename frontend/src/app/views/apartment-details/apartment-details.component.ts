import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
// Or use es6 import
// import { PanoViewer } from "@egjs/view360";

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent {

  apartment: Apartment = { amount: 0, type: '', image: '', description: '', price: 0 };
  id: any;
  // panoViewer = new PanoViewer(
  //   document.getElementById("myPanoViewer")!,
  //   {
  //     image: "/path/to/image/image.jpg"
  //   }
  // );

  constructor(@Inject(MAT_DIALOG_DATA) data: any, private dialogRef: MatDialogRef<ApartmentDetailsComponent>, private apartmentService: ApartmentService, private router: Router) {
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
    this.apartmentService.getApartment(this.id).subscribe(
      data => {
        this.apartment = data;
      }
    )
  }
}
