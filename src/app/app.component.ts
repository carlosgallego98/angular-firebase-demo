import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './shared/router-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class AppComponent {
  title = 'firebase-demo';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.isActivated || '';
  }
}
