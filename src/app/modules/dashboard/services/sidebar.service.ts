import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private collapsedSidebar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  toggleSidebar(value: boolean) {
    this.collapsedSidebar.next(value);
  }

  getCollapsedState() {
    return this.collapsedSidebar.asObservable();
  }
}
