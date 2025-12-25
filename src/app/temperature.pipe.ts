import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'temperature',
    standalone: true
})
export class TemperaturePipe implements PipeTransform { 
  transform(value: string | number) {
    let val: number;

    if (typeof value === 'string') {
        // if its a string, convert to number
        val = parseFloat(value);
    } else {
        // else its a number, use it directly
        val = value;
    };

    // temp in farenheit = (temp in celsius * 1.8) + 32
    let outputTemp = (val * 1.8) + 32;

    return `${outputTemp} °F`;
  }  
}