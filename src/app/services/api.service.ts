import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import e from 'express';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

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

  fetchLatLong(city:string){
    return this.http.get<any>("./assets/Lat-long.json");
  }

  fetchWeather(lat:string,long:string): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true&daily=temperature_2m_max,weathercode&timezone=auto`;

    return this.http.get<any>(url);
  }
}
  
