import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: true
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("triggered");
  }

}
