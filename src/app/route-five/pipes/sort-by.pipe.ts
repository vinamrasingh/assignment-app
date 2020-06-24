import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: any, category: string, order: string): any {
    let sortedArray;
    if (category === '' || order === '') {
      return array;
    }
    if (category !== '' && order !== '') {
      if (order === 'asc') {
        sortedArray = this.sortArray(array, category, order);
        return sortedArray;
      }
      else if (order === 'desc') {
        sortedArray = this.sortArray(array, category, order);
        return sortedArray.reverse();
      }
      return array;
    }
  }
  sortArray(array: any, category: string, order: string) {
    return array.sort((a, b) => {
      if (typeof a[category] === 'string' || typeof b[category] === 'string') {
        return a[category].localeCompare(b[category]);
      } else {
        return a[category] - b[category];
      }
    });
  }
}
