import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface NotificationSetting {
  type: string;
  email: boolean;
  sms: boolean;
  push: boolean;
}

interface UserPreference {
  language: string;
  dateFormat: string;
  measurementUnit: string;
  currency: string;
  timezone: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  imports : [FormsModule]
})
export class SettingsComponent implements OnInit {
  activeTab = 'general';
  
  userPreferences: UserPreference = {
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
    measurementUnit: 'Metric',
    currency: 'INR',
    timezone: 'Asia/Kolkata'
  };

  notificationSettings: NotificationSetting[] = [
    {
      type: 'Weather Alerts',
      email: true,
      sms: true,
      push: true
    },
    {
      type: 'Crop Calendar Reminders',
      email: true,
      sms: false,
      push: true
    },
    {
      type: 'Market Price Updates',
      email: true,
      sms: false,
      push: false
    },
    {
      type: 'Pest Alerts',
      email: true,
      sms: true,
      push: true
    }
  ];

  languages = ['English', 'Hindi', 'Marathi', 'Gujarati'];
  dateFormats = ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'];
  measurementUnits = ['Metric', 'Imperial'];
  currencies = ['INR', 'USD', 'EUR'];
  timezones = ['Asia/Kolkata', 'UTC', 'Asia/Dubai'];

  constructor() {}

  ngOnInit(): void {}

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  savePreferences(): void {
    // Implementation for saving preferences
    console.log('Preferences saved:', this.userPreferences);
  }

  saveNotifications(): void {
    // Implementation for saving notification settings
    console.log('Notification settings saved:', this.notificationSettings);
  }
}