import { animate, state, style, transition, trigger } from "@angular/animations";

export const fromRight = [
  trigger('fromRight', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    state('out', style({opacity: 0, transform: 'translateX(20px)'})),
    transition('in => out', animate('0.2s ease-out')),
    transition('out => in', animate('0.5s ease-in'))
  ])
];

export const fromLeft = [
  trigger('fromLeft', [
    state('in', style({opacity: 1, transform: 'translateX(0)'})),
    state('out', style({opacity: 0, transform: 'translateX(-20px)'})),
    transition('in => out', animate('0.2s ease-out')),
    transition('out => in', animate('0.5s ease-in'))
  ])
];

export const fadeIn = [
  trigger('fadeIn', [
    state('in', style({opacity: 1})),
    state('out', style({opacity: 0})),
    transition('in => out', animate('0.3s ease-out')),
    transition('out => in', animate('0.3s ease-in'))
  ])
];

export const fromTop =  [
  trigger('fromTop', [
    state('in', style({opacity: 1, transform: 'translateY(0)'})),
    state('out', style({opacity: 0, transform: 'translateY(-50px)'})),
    transition('in => out', animate(`0.3s ease-out`)),
    transition('out => in', animate(`0.3s ease-in`))
  ])
];

export const fromBottom =  [
  trigger('fromBottom', [
    state('in', style({opacity: 1, transform: 'translateY(0)'})),
    state('out', style({opacity: 0, transform: 'translateY(30px)'})),
    transition('in => out', animate(`0.3s ease-out`)),
    transition('out => in', animate(`0.3s ease-in`))
  ])
];