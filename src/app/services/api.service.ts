import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080';
  // private baseUrl = 'https://user-service-hcpl.onrender.com';

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register`, userData);
  }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/users/me/${userId}`);
  }

  login(credentials: any): Observable<any> {
    const loginObj = {
      email: credentials?.email,
      password: credentials?.password
    };
    if (credentials?.email && credentials?.password) {
      return this.http.post(`${this.baseUrl}/api/auth/login`, loginObj);
    }
    else {
      throw new Error('Invalid login credentials');
    }
  }
}
