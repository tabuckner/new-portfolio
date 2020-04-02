import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { TAB_EASING } from './constants';

export const listItemFadeInRightOut = trigger('listItemFadeInRightOut', [
  transition('* => *', [

    query(':enter', style({ opacity: 0 }), { optional: true }),

    query(':enter', stagger('100ms', [
      style({ opacity: 0 }),
      animate(`300ms ${TAB_EASING}`, keyframes([
        style({ opacity: 0, transform: 'translateX(-16px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
      ]))]), { optional: true }),

    query(':leave', stagger('100ms', [
      animate(`300ms ${TAB_EASING}`, keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 0, transform: 'translateX(-16px)', offset: 1.0 }),
      ]))]), { optional: true })
  ])
]);
