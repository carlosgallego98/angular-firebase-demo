import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  collapsedSidebar: Subject<boolean> = new Subject<boolean>();

  toggleSidebar(value: boolean) {
    this.collapsedSidebar.next(value);
  }
}
