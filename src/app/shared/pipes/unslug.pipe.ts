import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'unslug' })
export class UnslugPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.replace(/[-_]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }
}
