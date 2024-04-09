import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

const tetris = trigger('tetris', [
  state(
    'left',
    style({
      transform: 'translateX(100%)',
    })
  ),
  state(
    'right',
    style({
      transform: 'translateX(-100%)',
    })
  ),
  transition('* <=> *', [animate('1s ease-out')]),
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [tetris],
})
export class HomeComponent {
  label: string = 'Back';
  aboutAnimation: string = 'left';
  projectsAnimation: string = 'left';
  linkedinAnimation: string = 'left';
  resumeAnimation: string = 'left';

  functioncall(event: any) {
    console.log('functioncall', event);
  }

  onAnimationStart(event: any) {
    console.log(event);
  }

  onAnimationEnd(event: any) {
    this.aboutAnimation = this.moveBlock(this.aboutAnimation);
    this.projectsAnimation = this.moveBlock(this.projectsAnimation);
    this.linkedinAnimation = this.moveBlock(this.linkedinAnimation);
    this.resumeAnimation = this.moveBlock(this.resumeAnimation);
  }

  moveBlock(position: string): string {
    if (position === 'left') return 'right';
    else if (position === 'right') return 'left';

    console.log('home animation error');
    return '';
  }
}
