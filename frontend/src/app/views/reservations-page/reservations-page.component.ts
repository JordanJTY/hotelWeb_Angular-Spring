import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from 'src/app/shared/models/reservations';
import { DbService } from 'src/app/shared/services/db.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.scss']
})
export class ReservationsPageComponent {

  reservations: Array<Reservations> = []

  constructor(private reservationsService: ReservationsService, private storage: StorageService, private router: Router, private reportService: ReportsService, private db: DbService) { }

  ngOnInit() {
    this.reservationsService.getAllReservations().subscribe(info => {
      if(info != undefined){
        this.db.table("myStore2").clear()
      }

      for (let i = 0; i < info.length; i++) {
        if (this.storage.getUser().id == info[i].appUser.id) {
            this.db.table('myStore2').add({
                id: info[i].id,
                endDate: info[i].endDate,
                startDate: info[i].startDate,
                apartment:info[i].apartment, 
                user: info[i].appUser,
              }
            )
        }
      }

      this.db.table("myStore2").toArray().then(data => {
        for(let i = 0 ; i <= data.length-1 ; i++){
          this.db.table('myStore2').get(data[i].id!).then(data => {
            this.reservations.push(new Reservations(data.endDate,data.startDate, data.apartment, data.user, data.id)) 
          })
        }
      })
    }, error => {
      this.db.table("myStore2").toArray().then(data => {
        for(let i = 0 ; i <= data.length-1 ; i++){
          this.db.table('myStore2').get(data[i].id!).then(data => {
            this.reservations.push(new Reservations(data.endDate,data.startDate, data.apartment, data.user, data.id)) 
          })
        }
      })
    })
  }

  checkOrder(id: number, index: number) {
    if (new Date(this.reservations[index].startDate).toISOString() == new Date().toISOString() || new Date(this.reservations[index].startDate).toISOString() < new Date().toISOString()) {
      Swal.fire({
        title: 'Do you want to delete your reservation?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.reservationsService.deleteReservation(id);
          Swal.fire(
            'Done!',
            'Your reservation has been deleted correctly.',
            'success'
          ).then(function () {
            window.location.reload()
          })
        } else {
          Swal.fire({
            title: 'Do you want to print your invoice?',
            text: "You will see your invoice in another window!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#DAD2BC',
            cancelButtonColor: '#69747C',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              this.reportService.getInvoice(this.storage.getUser().id, id)
              Swal.fire(
                'Done!',
                'Your reservation has been printed correctly.',
                'success'
              ).then(function () {
                window.location.reload()
              })
            }
          })
        }
      })
    } else {
    this.router.navigateByUrl(`/edit-order/${id}`);
    }
  }
}
