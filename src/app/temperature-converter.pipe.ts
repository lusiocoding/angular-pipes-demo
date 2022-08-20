import { Pipe, PipeTransform } from '@angular/core';

export enum Temperature {
  FAHRENHEIT = 'F',
  CELSIUS = 'C',
}

@Pipe({
  name: 'temperatureConverter',
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, tempToConvertTo: Temperature): number {
    if (tempToConvertTo === Temperature.FAHRENHEIT) {
      const toFahrenheit = (value * 9) / 5 + 32;
      return toFahrenheit;
    }
    const toCelsius = ((value - 32) * 5) / 9;
    return toCelsius;
  }
}
