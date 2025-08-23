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
import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { SettingsComponent } from "../utils/settings/settings.component";
import { LoaderService } from '../services/loader-service/loader.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, DashboardComponent, LabourComponent, CropsComponent,
    WeatherComponent, ReportsComponent, RouterLink, SearchpageComponent, SettingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public datastoreService: DatastoreService, public router: Router, private loaderService: LoaderService) {
  }

  selectedItemValueEmittedFromChild: number = 0;
  usersCount = 120;
  cropsCount = 45;
  labourPresent = 30;
  weatherStatus = 'Sunny';
  sideMenuItem: string = "";

  screenWidth: number = typeof window !== 'undefined' ? window.innerWidth : 0;
  isSideMenuOpen: boolean = false;

  ngOnInit(): void {
    // this.loaderService.hide();
    this.isSideMenuOpen = false;
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.updateScreenWidth.bind(this));
    }

    // Set default side menu item
    this.sideMenuItem = this.sideMenuItems[this.selectedItemValueEmittedFromChild].label;
  }

  openSideMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.updateScreenWidth.bind(this));
    }
  }

  updateScreenWidth() {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 768) {
        this.isSideMenuOpen = false;
      }
    }
  }

  sideMenuItems = [
    { id: 1, label: 'Dashboard', route: '/dashboard' },
    { id: 2, label: 'Users', route: '/users' },
    { id: 3, label: 'Labour', route: '/labour' },
    { id: 4, label: 'Crops', route: '/crops' },
    { id: 5, label: 'Weather', route: '/weather' },
    { id: 6, label: 'Reports', route: '/reports' },
    { id: 7, label: 'Loans', route: '/loans' },
    { id: 8, label: 'Settings', route: '/settings' },
    { id: 9, label: 'Logout', route: '/login' }
  ];

  searchQuery: string = '';
  searchQueryEvent: string = '';

  onSearchClick() {
    this.onSearchChange(this.searchQuery);
  }
  onSearchChange($event: any) {
    this.datastoreService.searchPageIsOpen = true;
    this.sideMenuItem = "";
    if ($event === '') {
      this.datastoreService.searchPageIsOpen = false;
      this.sideMenuItem = this.sideMenuItems[0].label;
    }
    this.searchQueryEvent = $event;
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
    if (this.sideMenuItem === 'Logout') {
      this.router.navigate(['/login']);
    }
  }

  itemReceived(value: any) {
    this.selectedItemValueEmittedFromChild = value;
    this.sideMenuItem = this.sideMenuItems[this.selectedItemValueEmittedFromChild].label;
  }
}
