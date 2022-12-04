import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-card',
  templateUrl: './help-card.component.html',
  styleUrls: ['./help-card.component.scss']
})
export class HelpCardComponent {
  @Input() image;
  @Input() title;
  @Input() href;

  constructor() {
    this.image = '';
    this.title = '';
    this.href = '';
  }
}
