import { Component, Output } from '@angular/core';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent {

  apartment: Array<Apartment> = [];

  constructor(private apartmentService: ApartmentService, private db: DbService) {
    this.getAllApartment();
  }
  getAllApartment() {
    this.apartmentService.getAllApartments().subscribe(data => {

      if(data != undefined){
        this.db.table('myStore1').clear()
      }

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

      this.db.table("myStore1").toArray().then(data => {
        for(let i = 0 ; i <= data.length-1 ; i++){
          this.db.table('myStore1').get(data[i].id!).then(data => {
            this.apartment.push(new Apartment(data.type, data.img, data.typeImg, data.description, data.price, data.amount, data.id)) 
          })
        }
      })

    }, error => {
      this.db.table("myStore1").toArray().then(data => {
        for(let i = 0 ; i <= data.length-1 ; i++){
          this.db.table('myStore1').get(data[i].id!).then(data => {
            this.apartment.push(new Apartment(data.type, data.img, data.typeImg, data.description, data.price, data.amount, data.id)) 
          })
        }
      })
    })  
  }

  goToAdd(){
    window.location.href = 'add-apartment'
  }
}
