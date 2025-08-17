import { Component } from '@angular/core';
import { DatastoreService } from '../services/datastore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LabourComponent } from "../labour/labour.component";
import { CropsComponent } from "../crops/crops.component";
import { WeatherComponent } from "../weather/weather.component";
import { ReportsComponent } from "../reports/reports.component";
import { SearchpageComponent } from "../utils/searchpage/searchpage.component";
import { RouterLink } from '@angular/router';
import { on } from 'events';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, DashboardComponent, LabourComponent, CropsComponent, WeatherComponent, ReportsComponent, RouterLink, SearchpageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   constructor(public datastoreService: DatastoreService) {
  }
 


  usersCount = 120;
  cropsCount = 45;
  labourPresent = 30;
  weatherStatus = 'Sunny';
  sideMenuItem: string = "";

  ngOnInit(): void {
    // Set default side menu item
    this.sideMenuItem = this.sideMenuItems[0].label;
    this.datastoreService.loggedInUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    }; 
  }

  sideMenuItems = [
    { id: 1, label: 'Dashboard', route: '/dashboard' },
    { id: 2, label: 'Users', route: '/users' },
    { id: 3, label: 'Labour', route: '/labour' },
    { id: 4, label: 'Crops', route: '/crops' },
    { id: 5, label: 'Weather', route: '/weather' },
    { id: 6, label: 'Reports', route: '/reports' }
  ];

  // searchQuery: string = '';
  onSearchClick(){
    this.onSearchChange(this.datastoreService.searchQueryGlobal);
  }
  onSearchChange($event: any) {
    console.log("Search Query: ", $event);
    this.datastoreService.searchPageIsOpen = true;
    this.sideMenuItem = "";
    if($event === '') {
      this.datastoreService.searchPageIsOpen = false;
      this.sideMenuItem = this.sideMenuItems[0].label;
    }
    this.datastoreService.searchQueryGlobal = $event;
  }


  notifications: string[] = [
    "Weather Alert: Heavy rain expected tomorrow.",
    "Labour attendance updated.",
    "New crop added: Wheat"
  ];
  get notificationCount(): number {
    return this.notifications.length;
  }

  selectedSideBarItem(id: number) {
    this.sideMenuItem = this.sideMenuItems.find(item => item.id === id)?.label ?? "";
  }

  

  
}
