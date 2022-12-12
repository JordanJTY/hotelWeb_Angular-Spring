import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservations } from 'src/app/shared/models/reservations';
import { ReservationsService } from 'src/app/shared/services/reservations.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss']
})
export class AdminReservationsComponent implements OnInit {

  reservations: Array<Reservations> = [];

  constructor(private reservationsServices: ReservationsService, private router: Router) { }

  ngOnInit() {
    this.reservationsServices.getAllReservations().subscribe(
      data => {
        this.reservations = data;
      },
    );
  }
  goToDetails(id: number){
    this.router.navigateByUrl(`/details-reservation/${id}`);
  }
}
