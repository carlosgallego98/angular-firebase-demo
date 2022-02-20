import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidebarService } from './services/sidebar.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnChanges {
  public user!: User;
  public collapsed: boolean = false;

  constructor(private sidebarService: SidebarService, private authService: AuthService, private router: Router) {
    this.authService.user ? this.user = this.authService.user : null;
  }

  ngOnInit(): void {
    this.sidebarService.getCollapsedState().subscribe((value) => {
      this.collapsed = value;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

      this.collapsed = changes['collapsed'].currentValue;
  }

  toggleCollapsed(value: boolean): void {
    this.sidebarService.toggleSidebar(value);
  }

  logOut(): void {
    this.authService.logOut().then(
      () => {
        this.router.navigate(['./auth'])
      }
    )
  }
}
