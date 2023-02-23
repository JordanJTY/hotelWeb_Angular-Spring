import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from 'src/app/shared/models/reservations';
import { DbService } from 'src/app/shared/services/db.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { ReservationsService } from 'src/app/shared/services/reservations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})
export class AdminReservationsComponent implements OnInit {

  reservations: Array<Reservations> = [];

  constructor(private reservationsServices: ReservationsService, private router: Router, private reportService: ReportsService, private db: DbService) { }

  ngOnInit() {
    this.reservationsServices.getAllReservations().subscribe(
      data => {
        if(data != undefined){
          this.db.table('myStore2').clear()
        }
  
        data.forEach(element => {
          this.db.table('myStore2').add({
            id: element.id,
            endDate: element.endDate,
            startDate: element.startDate,
            apartment:element.apartment, 
            user: element.appUser,
            }
          )

          this.db.table("myStore2").toArray().then(data => {
            for(let i = 0 ; i <= data.length ; i++){
              this.db.table('myStore2').get(data[i].id!).then(data => {
                this.reservations.push(new Reservations(data.endDate, data.startDate, data.apartment, data.user, data.id)) 
              })
            }
          })
        });
      }, error  => {
        this.db.table("myStore2").toArray().then(data => {
          for(let i = 0 ; i <= data.length ; i++){
            this.db.table('myStore2').get(data[i].id!).then(data => {
              this.reservations.push(new Reservations(data.endDate, data.startDate, data.apartment, data.user, data.id)) 
            })
          }
        })
      });
  }

  goToDetails(id: number) {
    this.router.navigateByUrl(`/details-reservation/${id}`);
  }

  printReportReservations() {
    let year: number;
    Swal.fire({
      title: 'Submit the year what do you want to report',
      input: 'number',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
        year = input
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.reportService.getDataReservations(year);
        Swal.fire(
          'Done!',
          'Your report has been printed correctly.',
          'success'
        ).then(function () {
          window.location.href = 'allReservations';
        })
      }
    })
  }

  printReportUserReservations() {
    let username: string;
    Swal.fire({
      title: 'Submit the username what do you want to report',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (input) => {
        username = input
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        this.reportService.getUserReservations(username);
        Swal.fire(
          'Done!',
          'Your report has been printed correctly.',
          'success'
        ).then(function () {
          window.location.href = 'allReservations';
        })
      }
    })
  }

  printReportProfit(){
    Swal.fire({
      title: 'Would you like to print a profit report?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reportService.getAvgProfitPerYear();
        Swal.fire(
          'Done!',
          'Your report has been printed correctly.',
          'success'
        ).then(function () {
          window.location.href = 'admin-home';
        })
      }
    })
  }
}
