import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(date: string): string {
    const years = new Date(date).getFullYear();
    return years ? years.toString() : '';
  }
}
