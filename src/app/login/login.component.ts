import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastService } from '../services/toast-service/toast.service';
import { LoaderService } from '../services/loader-service/loader.service';
import { DatastoreService } from '../services/datastore.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService: ApiService, private toastService: ToastService, private loaderService: LoaderService,
    private router: Router, private datastoreService: DatastoreService) { }
  username: string = '';
  password: string = '';

  onLogin() {
    if (this.username && this.password) {
      let credentials:any = {
        email: this.username,
        password: this.password
      }
      this.apiService.login(credentials).subscribe(data=>{
           this.datastoreService.loggedInUser = data["refreshToken"];
           this.datastoreService.isUserLoggedIn = true;
           this.router.navigate(['/']);
        this.toastService.success('Login successful!');
        this.toastService.info('Welcome ' + this.datastoreService.loggedInUser.name + "!!");
        })
    } else {
      alert('Please enter username and password');
    }
  }
}
