import { Component, EventEmitter, OnInit, Output, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { User } from '@angular/fire/auth';
import { SidebarService } from '../../services/sidebar.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-bar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
})
export class AppbarComponent implements OnInit, AfterViewInit {

  public collapsed!: boolean;
  @Input() user!: User;
  @Output() logOut = new EventEmitter();





  constructor(private sidebarService: SidebarService) {
  }

  // Esto es lógica para el dropdown de usuario que puede ser movido a un componente aparte
  // si es necesario.
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  @ViewChild('dropdownContent') dropdownContent!: ElementRef;
  @ViewChild('dropdownWrapper') dropdownWrapper!: ElementRef;
  public userDropdownToggle() {
    this.dropdownContent.nativeElement.classList.toggle('closed');
  }
  ngAfterViewInit(): void {
    const placement = "bottom-end";
    createPopper(this.dropdownWrapper.nativeElement, this.dropdownContent.nativeElement, {
      placement: placement ? placement : 'right-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [-10, 2]
          },
        },
        {
          name: 'preventOverflow',
          options: {
            boundary: this.dropdownWrapper.nativeElement,
          },
        },
      ]
    });
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////

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
