import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

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
