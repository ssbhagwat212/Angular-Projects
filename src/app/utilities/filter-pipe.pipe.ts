import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any[], args: any): any[] {
    if(!value) return [];
    if(!args) return value;

    return value.filter( s=>{
      return s.title.toLowerCase().includes(args.toLowerCase())
    });
  }

}
