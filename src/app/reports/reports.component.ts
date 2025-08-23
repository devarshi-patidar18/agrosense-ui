import { AfterViewInit, Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const ctx = document.getElementById('cropChart') as HTMLCanvasElement;
      const ctx2 = document.getElementById('labourChart') as HTMLCanvasElement;
      
      if (ctx) {
        new Chart(ctx, {
          type: 'bar', // try 'line', 'pie', etc.
          data: {
            labels: ['Wheat', 'Rice', 'Maize', 'Soybean', 'Sugarcane'],
            datasets: [{
              label: 'Crop Yield (tons)',
              data: [12, 19, 7, 5, 14],
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
      if (ctx2) {
        new Chart(ctx2, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Labour Attendance',
              data: [30, 25, 28, 35, 40, 38],
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      } 
    }
  }

}
