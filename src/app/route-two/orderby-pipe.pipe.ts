import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderbyPipe'
})
export class OrderbyPipePipe implements PipeTransform {

  transform(array: any, args: string): any {
    if (args == "l2h") {
      array.sort((a, b) => {
        return a["price"] - b["price"];
      })
    }
    if (args == "h2l") {
      array.sort((a, b) => {
        return a["price"] - b["price"];
      });
      return array.reverse();
    }
    return array;
  }

}
