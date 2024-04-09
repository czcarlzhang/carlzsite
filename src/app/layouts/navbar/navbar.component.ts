import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  homeNav: boolean = false;
  aboutNav: boolean = false;
  projectsNav: boolean = false;

  constructor(private location: Location, private router: Router) {
    router.events.subscribe(() => {
      let route = location.path().substring(1);
      if (route == 'home') {
        this.homeNav = true;
        this.aboutNav = false;
        this.projectsNav = false;
      } else if (route == 'about') {
        this.homeNav = true;
        this.aboutNav = true;
        this.projectsNav = false;
      } else if (route == 'projects') {
        this.homeNav = true;
        this.aboutNav = false;
        this.projectsNav = true;
      }
    });
  }
}
