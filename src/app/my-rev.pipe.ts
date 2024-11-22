import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev', 
  standalone: true
})
export class MyRevPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }

}
