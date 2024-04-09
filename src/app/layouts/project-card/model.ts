export interface Project {
  img: string;
  link: string;
  stack: string[];
  title: string;
  desc: string;
  status: string;
}

export enum Status {
  complete = 'Complete',
  inProgress = 'In Progress',
}
