import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  label = 'button label';

  functioncall(event: any) {
    console.log('functioncall', event);
  }
}
