import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger('fade', [
  transition(':enter', [
    //valor inicial
    style({ opacity: 0 }),
    animate(200, style({ opacity: 1 })),
  ]),
  transition(':leave', [animate(200, style({ opacity: 0 }))]),
]);
