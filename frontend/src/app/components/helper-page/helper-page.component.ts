import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-helper-page',
  templateUrl: './helper-page.component.html',
  styleUrls: ['./helper-page.component.scss']
})
export class HelperPageComponent {
  helpContent = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/helpSystem/index.html', { responseType: 'text' })
      .subscribe(content => this.helpContent = content);
  }
}
