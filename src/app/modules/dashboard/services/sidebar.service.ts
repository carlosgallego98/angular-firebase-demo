import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private collapsedSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleSidebar(value: boolean) {
    this.collapsedSidebar.next(value);
    if (!value) {
      document.getElementsByTagName('body')[0].classList.add('backdrop-visible');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('backdrop-visible');
    }
  }

  getCollapsedState() {
    return this.collapsedSidebar.asObservable();
  }
}
