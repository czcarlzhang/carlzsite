import { Component, HostListener, OnInit } from '@angular/core';
import { PROJECTS } from './project-data';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  img: string = '';
  link: string = '';
  stack: string[] = [];
  title: string = '';
  desc: string = '';
  status: string = '';

  projectIndex: number = 1;
  numProjects: number = PROJECTS.length;

  ngOnInit(): void {
    this.getProject(this.projectIndex);
  }

  getProject(projectIndex: number) {
    this.img = PROJECTS[projectIndex].img;
    this.link = PROJECTS[projectIndex].link;
    this.stack = PROJECTS[projectIndex].stack;
    this.title = PROJECTS[projectIndex].title;
    this.desc = PROJECTS[projectIndex].desc;
    this.status = PROJECTS[projectIndex].status;
  }

  switchProjectLeft() {
    this.projectIndex =
      this.projectIndex == 0 ? this.numProjects - 1 : this.projectIndex - 1;
    this.getProject(this.projectIndex);
  }

  switchProjectRight() {
    this.projectIndex = (this.projectIndex + 1) % this.numProjects;
    this.getProject(this.projectIndex);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: any) {
    if (event.keyCode == 37) this.switchProjectLeft();
    else if (event.keyCode == 39) this.switchProjectRight();
  }
}
