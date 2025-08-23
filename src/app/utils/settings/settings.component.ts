import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatastoreService } from '../../services/datastore.service';
import { LoaderService } from '../../services/loader-service/loader.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast-service/toast.service';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  // @Input() selectedMenueItem: number = 0;
  @Output() selectedMenueItem = new EventEmitter<number>();

  constructor(private dataStore:DatastoreService, private router: Router, private loaderService: LoaderService, private toastService: ToastService) { }
  // Example fields
  username = '';
  email = '';
  notifications = true;
  darkMode = false;

  ngOnInit(){
    if(this.dataStore.loggedInUser){
      this.username = this.dataStore.loggedInUser.name;
      this.email = this.dataStore.loggedInUser.email;
    }
  }

  saveSettings() {
    this.loaderService.show();
    this.toastService.success('Settings saved successfully!');
    this.selectedMenueItem.emit(0);
    // this.router.navigate(['/']);
  }
}
