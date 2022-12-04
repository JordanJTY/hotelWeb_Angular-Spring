import { Component } from '@angular/core';
import { DataHelp } from 'src/app/shared/interfaces/data-help'

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent {
  data: DataHelp[];

  constructor() {
    this.data = [
      {
        image: 'docTerms',
        title: 'Terms and policy of privacy',
        href: ''
      },
      {
        image: 'infoAplicactionIcon',
        title: 'Information of application',
        href: ''
      },
      {
        image: 'infoAdditionalIcon',
        title: 'Additional information ',
        href: 'https://github.com/JordanJTY/hotelWeb_Angular-Spring'
      },
      {
        image: 'contacticon',
        title: 'Contact',
        href: ''
      },
    ]
  }

  deleteAccount(){
    console.log('si elevado a 4');
    // Put service to delete the user account and a alert to ask of the user is secure
    return false;
  }
}
