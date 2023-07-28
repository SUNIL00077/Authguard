import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './components crud/employee/employee.component';
import { UpdateComponent } from './components crud/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerComponent } from './canactivatechild/customer/customer.component';
import { AddcustomerComponent } from './canactivatechild/addcustomer/addcustomer.component';
import { ActivatechildGuard } from './canactivatechild/activatechild.guard';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    EmployeeComponent,
    UpdateComponent,
    CustomerComponent,
    AddcustomerComponent,
    LocalstorageComponent,
    SessionstorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [ActivatechildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
