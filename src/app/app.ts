import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from "./weather/weather.component";

@Component({
  selector: 'app-root',
  standalone: true,   // ← unbedingt hinzufügen
  imports: [RouterOutlet, WeatherComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Achtung: `styleUrls`, nicht `styleUrl`
})
export class App {
  protected readonly title = signal('weather-app');
}