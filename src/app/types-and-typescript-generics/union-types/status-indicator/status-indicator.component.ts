import { Component, Input } from '@angular/core';

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrl: './status-indicator.component.scss'
})
export class StatusIndicatorComponent {
  @Input() status: RequestStatus = 'idle';

  get statusLabel(): string {
    switch (this.status) {
      case 'idle': return 'Waiting...';
      case 'loading': return 'Loading...';
      case 'success': return 'Done!';
      case 'error': return 'Something went wrong.';
    }
  }

  get statusIcon(): string {
    switch (this.status) {
      case 'idle': return 'hourglass_empty';
      case 'loading': return 'autorenew';
      case 'success': return 'check_circle';
      case 'error': return 'error_outline';
    }
  }

  get statusColor(): string {
    switch (this.status) {
      case 'success': return 'primary';
      case 'error': return 'warn';
      default: return '';
    }
  }
}
