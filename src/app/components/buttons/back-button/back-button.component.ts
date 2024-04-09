import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {
  label = 'Back';

  constructor(private location: Location) {}

  goBackButton() {
    this.location.back();
  }
}
