import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthguardGuard } from './components/services/authguard.guard';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeComponent } from './components crud/employee/employee.component';
import { CustomerComponent } from './canactivatechild/customer/customer.component';
import { AddcustomerComponent } from './canactivatechild/addcustomer/addcustomer.component';
import { ActivatechildGuard } from './canactivatechild/activatechild.guard';

const routes: Routes = [
  {path:'',component:SignupComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthguardGuard]}

  // for crud
  // {path:'',component:EmployeeComponent}

  // canactivatechild
//   {path:'customer',component:CustomerComponent,canActivateChild:[ActivatechildGuard],
// children:[
//   {path:'addcustomer',component:AddcustomerComponent}
// ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
