import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { User } from '@angular/fire/auth';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit {
  public collapsed!: boolean;
  @Input() user!: User;
  @Output() logOut = new EventEmitter();
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.sidebarService.getCollapsedState().subscribe((value) => {
      this.collapsed = value;
    });
  }

  collapsedSidebarToggle() {
    this.collapsed = !this.collapsed;
    this.sidebarService.toggleSidebar(this.collapsed);
  }

  logOutEvent() {
    this.logOut.emit();
  }
}
