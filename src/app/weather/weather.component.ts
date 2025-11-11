import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    if (!this.city) return;
    this.weatherService.getWeather(this.city).subscribe({
      next: data => this.weather = data,
      error: err => {
        console.error(err);
        alert('Fehler beim Laden der Wetterdaten');
      }
    });
  }
}