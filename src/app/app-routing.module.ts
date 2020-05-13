import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditComponent } from './edit/edit.component';
import { SubmitTicketComponent } from './submit-ticket/submit-ticket.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ChangeStatusComponent } from './change-status/change-status.component';

const routes: Routes = [
  
  {path:"users/register",component:RegistrationComponent, pathMatch:'full'},
  {path:"users/authenticate",component:LoginComponent,pathMatch:'full'},
  {path:"users/getPassword",component:ForgotPasswordComponent,pathMatch:'full'},
  {path:"users/tickets",component:HomeComponent,pathMatch:'full'},
  {path:"admin/authenticate",component:AdminloginComponent,pathMatch:'full'},
  {path:"users/tickets/edit",component:EditComponent,pathMatch:'full'},
  {path:"users/tickets/submit",component:SubmitTicketComponent,pathMatch:'full'},
  {path:"admin/authenticate",component:AdminloginComponent,pathMatch:'full'},
  {path:"admin/tickets",component:AdminHomeComponent,pathMatch:'full'},
  {path:"admin/tickets/changeStatus",component:ChangeStatusComponent,pathMatch:'full'},
  {path:"", redirectTo: 'users/authenticate',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
