import { Pipe, PipeTransform } from '@angular/core';
import { startWith } from 'rxjs';

@Pipe({
  name: 'filterData',
  pure: true
})
export class FilterDataPipe implements PipeTransform {

  transform(value: any, name: string) {
     if( name === ''){
       return value;
     }

     return value.filter((x:any) => x.name.toLowerCase().startsWith(name.toLowerCase()))

     //  return value.filter(
    //     (item:any) => item.name.toLowerCase().startsWith(name.toLowerCase())
    //     )

    }








}
