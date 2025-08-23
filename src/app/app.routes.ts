import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NotificationsComponent } from './notifications/notifications.component';


export const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
  //  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'notifications', component: NotificationsComponent },
  // Add more routes here
];
