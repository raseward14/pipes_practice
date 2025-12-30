import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];

    // approach #1: simple numeric sort
    // sorted.sort((a, b) => Number(a) - Number(b));

    // if (direction === 'desc') {
    //   return sorted.reverse();
    // }

    // return sorted;

    // approach #2: enhanced sort with direction
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a < b ? -1 : 1;
      } else {
        return a < b ? 1 : -1;
      }
    })
    return sorted;
  }

}
