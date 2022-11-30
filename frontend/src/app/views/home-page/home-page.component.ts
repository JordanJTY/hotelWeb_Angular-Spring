import { Component } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  apartment: Array<Apartment> = [];

  constructor(private apartmentService: ApartmentService){
    this.getAllApartment();
  }

  getAllApartment(){
    this.apartmentService.getAllApartments().subscribe(data => {
      this.apartment = data;
    })
  }
}
