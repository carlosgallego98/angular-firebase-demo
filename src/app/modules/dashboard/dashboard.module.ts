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
  logout, HeroIconModule, save
} from 'ng-heroicon';
import { AppbarComponent } from './components/appbar/appbar.component';
import { SidebarService } from './services/sidebar.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const icons = {
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
  save,
  chevronDoubleRight,
  chevronDoubleLeft,
}

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    AppbarComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HeroIconModule.forRoot(
      icons, {
      defaultHostDisplay: 'inlineBlock', // default 'none'
      attachDefaultDimensionsIfNoneFound: true // default 'false'
    })
  ],
  providers: [SidebarService],
})
export class DashboardModule { }
