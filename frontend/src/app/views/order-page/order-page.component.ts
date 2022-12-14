import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent {

  idApartment: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.idApartment = this.activatedRoute.snapshot.paramMap.get('id')
  }
}
