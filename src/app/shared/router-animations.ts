import { style, trigger, transition, group, animate, query } from "@angular/animations";

const resetRoute = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'fixed', // using absolute makes the scroll get stuck in the previous page's scroll position on the new page
        top: 0, // adjust this if you have a header so it factors in the height and not cause the router outlet to jump as it animates
        left: 0,
        width: '100%',
        opacity: 0,
      }),
    ],
    { optional: true }
  ),
];

// Fade Animation
export const fadeAnimation = trigger('routeFadeAnimation', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
    ])
  ]),
]);
