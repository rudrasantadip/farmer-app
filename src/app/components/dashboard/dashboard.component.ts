import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
  ngOnInit(): void {
    const ctx = document.getElementById('user-traffic') as HTMLCanvasElement;
    const bot = document.getElementById('bot-traffic') as HTMLCanvasElement;

    const trafficChart = new Chart(ctx,
      {
      type: 'line',
      data: {
        labels: ['12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '10:00 PM', '12:00 AM'],
        datasets: [{
          label: 'Users',
          data: [12, 19, 40, 38, 2, 3, 7],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const botChart = new Chart(bot, {
      type: 'line',
      data: {
        labels: ['12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM', '10:00 PM', '12:00 AM'],
        datasets: [{
          label: 'Sub Bots',
          data: [22, 19, 50, 42, 8, 3, 7],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: '#1E88E5',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

    
  }

  


