import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'list-users', component: ListUsersComponent},
  { path: 'edit-user/:id', component: EditUserComponent},
  { path: 'create-admin', component: CreateAdminComponent},
  { path: 'list-admins', component: ListAdminsComponent},
  { path: 'edit-admin/:id', component: EditAdminComponent},
  { path: 'create-application', component: CreateApplicationComponent},
  { path: 'list-applications', component: ListApplicationsComponent},
  { path: 'edit-application/:id', component: EditApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
