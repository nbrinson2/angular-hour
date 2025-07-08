import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluralize' })
export class PluralizePipe implements PipeTransform {
  transform(value: number, singular: string, plural?: string): string {
    const word = value === 1 ? singular : (plural || singular + 's');
    return `${value} ${word}`;
  }
}
