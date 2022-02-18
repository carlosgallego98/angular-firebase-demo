import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidebarService } from '../../services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public user!: User;
  public collapsed: boolean = false;

  constructor(public authService: AuthService, private router: Router, private sidebarService: SidebarService) {
    this.authService.user ? this.user = this.authService.user : null;
    this.sidebarService.collapsedSidebar.subscribe((value) => {
      this.collapsed = value;
    });
  }

  ngOnInit(): void {
  }

  collapsedSidebarToggle() {
    this.sidebarService.toggleSidebar(!this.collapsed);
  }

  logOut(): void {
    this.authService.logOut().then(
      () => {
        this.router.navigate(['./auth'])
      }
    )
  }
}
