import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-reservation-data',
  templateUrl: './admin-reservation-data.component.html',
  styleUrls: ['./admin-reservation-data.component.scss']
})
export class AdminReservationDataComponent {

  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
  }
}
