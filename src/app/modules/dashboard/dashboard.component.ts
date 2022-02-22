import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  public collapsed!: boolean;;
  public getScreenWidth: any;

  constructor(private sidebarService: SidebarService, private authService: AuthService, private router: Router) {
    this.authService.user ? this.user = this.authService.user : null;
    this.getScreenWidth = window.innerWidth;

  }

  ngOnInit(): void {
    this.sidebarService.getCollapsedState().subscribe((value) => {
      this.collapsed = value;
    });
    if (this.getScreenWidth <= 768) {
      document.getElementById('collapse-sidebar-button')?.click();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.collapsed = changes['collapsed'].currentValue;
  }

  toggleCollapsed(value: boolean): void {
    this.sidebarService.toggleSidebar(value);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 768) {
      this.collapsed = true;
    }
  }

  logOut(): void {
    this.authService.logOut().then(
      () => {
        this.router.navigate(['./auth'])
      }
    )
  }
}
