import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import {
  home,
  users,
  tag,
  cog,
  x,
  menu,
  dotsVertical,
  arrowsExpand,
  collection,
  chevronDoubleRight,
  chevronDoubleLeft,
  logout, HeroIconModule
} from 'ng-heroicon';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { SidebarService } from './services/sidebar.service';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    AppbarComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxTippyModule,
    HeroIconModule.forRoot({
      home,
      users,
      tag,
      menu,
      x,
      cog,
      dotsVertical,
      arrowsExpand,
      collection,
      logout,
      chevronDoubleRight,
      chevronDoubleLeft,
    }, {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
    })
  ],
  providers: [SidebarService],
})
export class DashboardModule { }
