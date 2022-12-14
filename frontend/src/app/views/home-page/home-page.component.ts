import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  apartment: Array<Apartment> = [];

  constructor(private apartmentService: ApartmentService, private dialog: MatDialog) {
    this.getAllApartment();
  }

  openDetails(id: any) {
    this.dialog.open(ApartmentDetailsComponent, {
      data: {
        id: id,
      }, 
      width: '320px',
      height: '545px'
    });
  }

  getAllApartment() {
    this.apartmentService.getAllApartments().subscribe(data => {
      this.apartment = data;
    })
  }
}
