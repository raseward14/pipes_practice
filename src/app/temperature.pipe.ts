import { output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number, 
    inputType: 'cel' | 'fah', 
    outputType?: 'cel' | 'fah'
  ) {
    let val: number;

    if (typeof value === 'string') {
      // if its a string, convert to number
      val = parseFloat(value);
    } else {
      // else its a number, use it directly
      val = value;
    };

    let outputTemp: number;

    if (inputType === 'cel' && outputType === 'fah') {
      // temp in farenheit = (temp in celsius * 1.8) + 32
      outputTemp = (val * 1.8) + 32;
      return `${outputTemp} °F`;
    } else if (inputType === 'fah' && outputType === 'cel') {
      // temp in celsius = (temp in farenheit - 32) / 1.8
      outputTemp = (val - 32) / 1.8;
      return `${outputTemp} °C`;  
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }
    return `${outputTemp} ${symbol}`;
  }
}