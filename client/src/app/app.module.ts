import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { ProfileComponent } from './profile/profile.component'
import { LoginComponent } from './login/login.component'
import { AdminusermanageComponent } from './adminusermanage/adminusermanage.component'
import { ConsultantusermanageComponent } from './consultantusermanage/consultantusermanage.component'
import { RegisterComponent } from './register/register.component'
import { AdminComponent } from './admin/admin.component'
import { ConsultantComponent } from './consultant/consultant.component'
import { CustomerComponent } from './customer/customer.component'
import { CustomerinfoComponent } from './customerinfo/customerinfo.component'
import { CustomerletterComponent } from './customerletter/customerletter.component'
import { LettergenerateComponent } from './lettergenerate/lettergenerate.component'
import { AdmininfoComponent } from './admininfo/admininfo.component'
import { AdmininfomanageComponent } from './admininfomanage/admininfomanage.component'
import { AdminletterComponent } from './adminletter/adminletter.component'
import { CustomerregisterComponent } from './customerregister/customerregister.component'
import { AuthenticationService } from './authentication.service'
import { AuthGuardService } from './auth-guard.service'
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AngularEditorModule } from '@kolkov/angular-editor';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminusermanage', component: AdminusermanageComponent },
  { path: 'consultantusermanage', component: ConsultantusermanageComponent },
  { path: 'consultant', component: ConsultantComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'customerinfo', component: CustomerinfoComponent },
  { path: 'customerletter', component: CustomerletterComponent },
  { path: 'admininfo', component: AdmininfoComponent },
  { path: 'admininfomanage', component: AdmininfomanageComponent },
  { path: 'adminletter', component: AdminletterComponent },
  { path: 'lettergenerate', component: LettergenerateComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customerregister', component: CustomerregisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AdminusermanageComponent,
    ConsultantusermanageComponent,
    LettergenerateComponent,
    LoginComponent,
    RegisterComponent,
    CustomerregisterComponent,
    ConsultantComponent,
    CustomerComponent,
    CustomerinfoComponent,
    CustomerletterComponent,
    AdminComponent,
    AdmininfoComponent,
    AdminletterComponent,
    AdmininfomanageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule ,
    RouterModule.forRoot(routes),
    SimpleNotificationsModule.forRoot()
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
