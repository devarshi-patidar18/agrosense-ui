import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReportsComponent } from "../reports/reports.component";
import { LoaderService } from '../services/loader-service/loader.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [CommonModule, FormsModule, ReportsComponent],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  usersCount = 120;
  cropsCount = 45;
  labourPresent = 30;
  weatherStatus = 'Sunny';

  constructor(private loaderService: LoaderService) { }

  ngOnInit(){
    this.loaderService.show();
    // Simulate an API call
    setTimeout(() => {
      this.loaderService.hide();
    }, 2000);
  }
  
}
