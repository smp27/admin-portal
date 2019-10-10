import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthguardService } from './services/authguard.service';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { CreateAdminuserComponent } from './components/create-adminuser/create-adminuser.component';
import { EditAdminuserComponent } from './components/edit-adminuser/edit-adminuser.component';
import { ListAdminusersComponent } from './components/list-adminusers/list-adminusers.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService]},
  { path: 'create-role', component: CreateRoleComponent, canActivate: [AuthguardService]},
  { path: 'list-roles', component: ListRolesComponent, canActivate: [AuthguardService]},
  { path: 'edit-role/:id', component: EditRoleComponent, canActivate: [AuthguardService]},
  { path: 'create-adminuser', component: CreateAdminuserComponent, canActivate: [AuthguardService]},
  { path: 'list-adminusers', component: ListAdminusersComponent, canActivate: [AuthguardService]},
  { path: 'edit-adminuser/:id', component: EditAdminuserComponent, canActivate: [AuthguardService]},
  { path: 'create-application', component: CreateApplicationComponent, canActivate: [AuthguardService]},
  { path: 'list-applications', component: ListApplicationsComponent, canActivate: [AuthguardService]},
  { path: 'edit-application/:id', component: EditApplicationComponent, canActivate: [AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
