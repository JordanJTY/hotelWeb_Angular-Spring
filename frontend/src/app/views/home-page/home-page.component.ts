import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { DbService } from 'src/app/shared/services/db.service';
import { ApartmentDetailsComponent } from '../apartment-details/apartment-details.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  apartment: Array<Apartment> = [];
  name: string;

  constructor(private apartmentService: ApartmentService, private dialog: MatDialog, private db: DbService) {
    this.getAllApartment();
    this.name="";
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
      data.forEach(element => {
        this.db.table('myStore1').add({
          id: element.id,
          amount: element.amount,
          description: element.description,
          img:element.image, 
          typeImg: element.typeImg,
          price:element.price,
          type:element.type
          }
        )
      });
      for(let i = 1 ; i <= data.length ; i++){
        this.db.table('myStore1').get(i).then(data => {
          this.apartment.push(new Apartment(data.type, data.img, data.typeImg, data.description, data.price, data.amount, data.id)) 
        })
      }
    })
  }
}
