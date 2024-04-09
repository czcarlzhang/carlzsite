import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  label = 'HI';
  functioncall(event: any) {
    console.log('functioncall', event);
  }
}
