import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', loadComponent: () => import('./signup/signup.component').then(m => m.SignupComponent) },
  { path: 'notifications', loadComponent: () => import('./notifications/notifications.component').then(m => m.NotificationsComponent) },
  // Add more routes here
];
