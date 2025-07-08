import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusClass' })
export class StatusClassPipe implements PipeTransform {
  transform(status: string): string {
    switch (status?.toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'pending':
        return 'status-pending';
      case 'inactive':
        return 'status-inactive';
      default:
        return 'status-unknown';
    }
  }
}
