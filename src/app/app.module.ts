import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';

import { UserService } from './services/user/user.service';
import { AdminService } from './services/admin/admin.service';
import { ApplicationService } from './services/application/application.service';
import { SuperadminService } from './services/superadmin/superadmin.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    CreateUserComponent,
    ListUsersComponent,
    EditUserComponent,
    EditAdminComponent,
    ListAdminsComponent,
    CreateAdminComponent,
    CreateApplicationComponent,
    EditApplicationComponent,
    ListApplicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AdminService,
    ApplicationService,
    SuperadminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
