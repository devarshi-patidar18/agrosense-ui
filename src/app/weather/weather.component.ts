import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { registerables } from 'chart.js';
import { ApiService } from '../services/api.service';
Chart.register(...registerables);

interface WeatherData {
  temperature: number;
  windspeed: number;
  time: string;
  weathercode: number;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements AfterViewInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchWeather();
  }

  weatherData: any;

  fetchWeather() {

    this.apiService.fetchWeather("", "").subscribe((data) => {
      console.log(data);
        this.weatherData = {
          temperature: data.current_weather.temperature,
          windspeed: data.current_weather.windspeed,
          time: data.current_weather.time,
          weathercode: data.current_weather.weathercode
        };

        // // Update chart with forecast
        // this.lineChartData.labels = data.daily.time;
        // this.lineChartData.datasets[0].data = data.daily.temperature_2m_max;

        // this.loading = false;
      },
        // error: () => {
        //   this.loading = false;
        // }
    );
  }

  getWeatherIcon(code: number): string {
    // Open-Meteo weather codes: https://open-meteo.com/en/docs
    if ([0].includes(code)) return '☀️'; // Clear
    if ([1, 2].includes(code)) return '⛅'; // Partly cloudy
    if ([3].includes(code)) return '☁️'; // Cloudy
    if ([45, 48].includes(code)) return '🌫️'; // Fog
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️'; // Rain
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️'; // Snow
    if ([95, 96, 99].includes(code)) return '⛈️'; // Thunderstorm
    return '❔'; // Unknown
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const ctx = document.getElementById('weather') as HTMLCanvasElement;
      // const ctx2 = document.getElementById('labourChart') as HTMLCanvasElement;

      if (ctx) {
        new Chart(ctx, {
          type: 'line', // try 'line', 'pie', etc.
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
              {
                label: 'Temperature (°C)',
                data: [18, 22, 25, 30, 28, 24],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4, // smooth curve
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: '#333'
                }
              }
            },
            scales: {
              x: {
                ticks: { color: '#555' }
              },
              y: {
                beginAtZero: true,
                ticks: { color: '#555' }
              }
            }
          }
        });
      }
      //   new Chart(ctx2, {
      //     type: 'line',
      //     data: {
      //       labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      //       datasets: [{
      //         label: 'Labour Attendance',
      //         data: [30, 25, 28, 35, 40, 38],
      //         fill: false,
      //         borderColor: 'rgba(75, 192, 192, 1)',
      //         tension: 0.1
      //       }]
      //     },
      //     options: {
      //       responsive: true,
      //       maintainAspectRatio: false,
      //       scales: {
      //         y: {
      //           beginAtZero: true
      //         }
      //       }
      //     }
      //   });
      // } 
    }
  }
}
