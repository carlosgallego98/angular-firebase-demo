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
  collection,
  chevronDoubleRight,
  chevronDoubleLeft,
  logout, HeroIconModule
} from 'ng-heroicon';
import { AppbarComponent } from './components/appbar/appbar.component';


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
    HeroIconModule.forRoot({
      home,
      users,
      tag,
      cog,
      collection,
      logout,
      chevronDoubleRight,
      chevronDoubleLeft,
    }, {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
    })
  ]
})
export class DashboardModule { }
