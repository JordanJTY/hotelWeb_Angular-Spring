import { Component } from '@angular/core';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  public search: string = '';
  public miToken: number;
  
  constructor(private name: LoadScriptsService) {
    this.miToken = 0;
    name.Load(["slider"]);
  }
}
