import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [FormsModule]
})
export class UsersComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh.farmer@agrosense.com',
      role: 'Farmer'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.agronomist@agrosense.com',
      role: 'Agronomist'
    },
    {
      id: 3,
      name: 'Amit Singh',
      email: 'amit.supplier@agrosense.com',
      role: 'Supplier'
    },
    {
      id: 4,
      name: 'Meera Desai',
      email: 'meera.expert@agrosense.com',
      role: 'Agricultural Expert'
    },
    {
      id: 5,
      name: 'Suresh Verma',
      email: 'suresh.farmer@agrosense.com',
      role: 'Farmer'
    }
  ];

  newUser: User = {
    id: 0,
    name: '',
    email: ''
  };

  loading = false;

  ngOnInit(): void {
    // Simulate loading
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  addUser(): void {
    if (this.newUser.name && this.newUser.email) {
      this.newUser.id = this.users.length + 1;
      this.users.push({...this.newUser});
      this.newUser.name = '';
      this.newUser.email = '';
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
