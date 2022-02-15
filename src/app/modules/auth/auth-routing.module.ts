import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'account-recovery',
    component: AccountRecoveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
