import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, type: string): string {
    if (typeof value !== 'number' || value < 1) {
      return 'Invalid input';
    }

    switch (type.toLowerCase()) {
      case 'prime':
        return this.isPrime(value) ? `${value} is a Prime number` : `${value} is not a Prime number`;

      case 'perfect':
        return this.isPerfect(value) ? `${value} is a Perfect number` : `${value} is not a Perfect number`;

      case 'even':
        return value % 2 === 0 ? `${value} is an Even number` : `${value} is not an Even number`;

      case 'odd':
        return value % 2 !== 0 ? `${value} is an Odd number` : `${value} is not an Odd number`;

      default:
        return 'Invalid parameter';
    }
  }


  private isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  private isPerfect(num: number): boolean {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num && num !== 1;
  }

}
