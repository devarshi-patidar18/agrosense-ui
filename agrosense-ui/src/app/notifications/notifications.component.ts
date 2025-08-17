import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {
  notificationCount: number = 3;
  notifications: string[] = [
    'New message from John',
    'Your order has been shipped',
    'Reminder: Meeting at 3 PM'
  ];
}
