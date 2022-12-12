import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apartment-card',
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.scss']
})
export class ApartmentCardComponent implements OnInit {

  @Input() id:number;
  @Input() type: string;
  @Input() image: SafeResourceUrl;
  @Input() description: string;
  @Input() typeImg:string;


  constructor(private sanitizer: DomSanitizer) {
    this.id = 0;
    this.type = '';
    this.image = '';
    this.description = '';
    this.typeImg = '';
  }

  ngOnInit() {
  }
}
