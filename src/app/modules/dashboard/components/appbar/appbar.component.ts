import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output, Input } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  collapsed!: boolean;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.collapsedSidebar.subscribe((value) => {
      this.collapsed = value;
    });
  }

  ngOnInit(): void {

  }

  collapsedSidebarToggle() {
    this.collapsed = !this.collapsed;
    this.sidebarService.toggleSidebar(this.collapsed);
  }
}
