import { Component } from '@angular/core';
import { Reservations } from 'src/app/shared/models/reservations';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationsPageComponent {

  reservations: Array<Reservations> = []

  constructor(private reservationsService: ReservationsService, private storage: StorageService) { }

  ngOnInit() {
    let data = this.reservationsService.getAllReservations();
    data.forEach(info => {
      let x = 0;
      for (let i = 0; i < info.length; i++) {
        if (this.storage.getUser().id == info[i].appUser.id) {
          this.reservations[x] = info[i];
          x++;
        }
      }
    })
  }

  checkOrder(){
    console.log('Perfe pá');
  }
}
