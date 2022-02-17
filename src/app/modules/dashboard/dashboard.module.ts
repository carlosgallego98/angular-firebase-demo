import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
