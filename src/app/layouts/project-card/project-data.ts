import { Project, Status } from './model';

export const PROJECTS: Project[] = [
  {
    img: '/assets/imgs/zcraft.png',
    link: 'https://github.com/CarlZProj/z-craft',
    stack: ['Java'],
    title: 'ZCraft',
    desc: 'descriptionas of game',
    status: Status.complete,
  },

  {
    img: '/assets/imgs/searchzrift.png',
    link: 'https://github.com/CarlZProj/searchzrift',
    stack: ['React', 'Django'],
    title: 'SearchZRift',
    desc: 'descriptionas of game',
    status: Status.complete,
  },
  {
    img: '/assets/imgs/carlzalgo.jfif',
    link: 'https://github.com/CarlZProj/carlzalgo',
    stack: ['Python'],
    title: 'CarlZAlgo',
    desc: 'descriptionas of game',
    status: Status.inProgress,
  },
];
