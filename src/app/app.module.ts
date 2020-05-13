import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegistrationService } from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditComponent } from './edit/edit.component';
import { SubmitTicketComponent } from './submit-ticket/submit-ticket.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ChangeStatusComponent } from './change-status/change-status.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    AdminloginComponent,
    EditComponent,
    SubmitTicketComponent,
    AdminHomeComponent,
    ChangeStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserRegistrationService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
