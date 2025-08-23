import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastService } from '../services/toast-service/toast.service';
import { LoaderService } from '../services/loader-service/loader.service';
import { DatastoreService } from '../services/datastore.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: any;
  email: any;
  password: any;
  confirmpassword: any;

  constructor(private apiService: ApiService, private toastService: ToastService, private loaderService: LoaderService,
    private router: Router, private datastoreService: DatastoreService) { }

  onSignup() {
    this.loaderService.show();
    const userData = {
      name: this.username,
      email: this.email,
      password: this.password
    };
    this.apiService.register(userData).subscribe({
      next: (response) => {
        this.apiService.login(userData).subscribe(data=>{
           this.datastoreService.loggedInUser = data["refreshToken"];
           this.router.navigate(['/']);
        this.toastService.success('Registration successful!');
        this.toastService.info('Welcome ' + this.datastoreService.loggedInUser.name + "!!");
        })
       
        

        // this.loaderService.hide();
      },
      error: (error) => {
        this.toastService.error('Registration failed!');
        setTimeout(() => {
          this.loaderService.hide();
        }, 1000);
      },
    });
  }

}
