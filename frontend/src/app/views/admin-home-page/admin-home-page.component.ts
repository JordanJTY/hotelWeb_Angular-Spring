import { Component, Output } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent {

  apartment: Array<Apartment> = [];

  constructor(private apartmentService: ApartmentService) {
    this.getAllApartment();
  }
  getAllApartment() {
    this.apartmentService.getAllApartments().subscribe(data => {
      this.apartment = data;
    })
  }

  goToAdd(){
    window.location.href = 'add-apartment'
  }
}
