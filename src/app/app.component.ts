import { Component } from '@angular/core';
import { Temperature } from './temperature-converter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = new Date();
  value = 99.99;

  fahrenheit = 80;
  celsius = 26.6667;
  temperature = Temperature;
}
