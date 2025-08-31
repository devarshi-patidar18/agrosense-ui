import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  fetchLatLong(city: string) {
    return this.http.get<any>("./assets/Lat-long.json");
  }

  fetchWeather(lat: string, long: string): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current_weather=true&daily=temperature_2m_max,weathercode&timezone=auto`;

    return this.http.get<any>(url);
  }
}
