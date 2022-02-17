import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public user!: User;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.user ? this.user = this.authService.user : null;
  }

  ngOnInit(): void {
  }
  logOut(): void {
    this.authService.logOut().then(
      () => {
        this.router.navigate(['./auth'])
      }
    )
  }
}
