import { state, style, trigger } from '@angular/animations';

export const leftRigth = trigger('leftRigth', [
  state(
    'left',
    style({
      transform: 'translateX(0)',
    })
  ),
]);
