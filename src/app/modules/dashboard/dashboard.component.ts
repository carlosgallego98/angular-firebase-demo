import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [SidebarService]
})
export class DashboardComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
  }
}
