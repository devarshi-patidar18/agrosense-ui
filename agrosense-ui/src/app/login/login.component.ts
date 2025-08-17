import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    if (this.username && this.password) {
      console.log('Logging in with', this.username, this.password);
      // Later: integrate with backend auth API
    } else {
      alert('Please enter username and password');
    }
  }
}
