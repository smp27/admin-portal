import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { EditRoleComponent } from './components/edit-role/edit-role.component';
import { EditAdminuserComponent } from './components/edit-adminuser/edit-adminuser.component';
import { ListAdminusersComponent } from './components/list-adminusers/list-adminusers.component';
import { CreateAdminuserComponent } from './components/create-adminuser/create-adminuser.component';
import { CreateApplicationComponent } from './components/create-application/create-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';

import { RoleService } from './services/role/role.service';
import { AdminuserService } from './services/adminuser/adminuser.service';
import { ApplicationService } from './services/application/application.service';
import { SuperadminService } from './services/superadmin/superadmin.service';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LogoutComponent,
    CreateRoleComponent,
    ListRolesComponent,
    EditRoleComponent,
    EditAdminuserComponent,
    ListAdminusersComponent,
    CreateAdminuserComponent,
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
    RoleService,
    AdminuserService,
    ApplicationService,
    SuperadminService,
    AuthguardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
