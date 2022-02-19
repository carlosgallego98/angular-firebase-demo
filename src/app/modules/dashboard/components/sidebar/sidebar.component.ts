import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeroIconName } from 'ng-heroicon';
import { NgxTippyProps } from 'ngx-tippy-wrapper';

type Link = {
  name: string,
  icon: HeroIconName,
  route: string,
  disabled?: boolean,
  children?: Link[]
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.collapsed')
  @Input('collapsed') collapsed!: boolean;

  @Output() toggleCollapsed = new EventEmitter();

  public sidebarTippyProps: NgxTippyProps = {
    offset: [0, 20],
    arrow: false,
    placement: 'right'
  };
  public links: Link[] = [
    {
      name: 'Inicio',
      icon: 'home',
      route: 'home'
    },
    {
      name: 'Usuarios',
      icon: 'users',
      route: 'users'
    },
    {
      name: 'Grupos',
      icon: 'tag',
      route: 'groups'
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  collapsedSidebarToggle() {
    this.collapsed = !this.collapsed;
    this.toggleCollapsed.emit(this.collapsed);
  }

}
