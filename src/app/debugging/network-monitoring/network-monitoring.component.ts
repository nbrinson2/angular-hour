import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { networkMonitoringCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-network-monitoring',
  templateUrl: './network-monitoring.component.html',
  styleUrl: './network-monitoring.component.scss',
})
export class NetworkMonitoringComponent {
  networkResponse: any;
  errorResponse: any;

  networkMonitoringCode = networkMonitoringCode;

  responseExampleInfo: InfoItem = {
    context:
      'Click the button to send a request to JSONPlaceholder. Open the Network panel to view the details of the HTTP request and response.',
  };

  errorResponseExampleInfo: InfoItem = {
    context:
      'Click the button to trigger an HTTP error (endpoint does not exist). Open the Network panel to view the error details.',
  };

  constructor(private http: HttpClient) {}

  async runNetworkRequest(): Promise<void> {
    const userId = 1;
    try {
      const response = await firstValueFrom(
        this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      );
      this.networkResponse = response;
      console.log('Network response:', response);
    } catch (error) {
      console.error('Network error:', error);
    }
  }

  async runErrorRequest(): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.http.get('https://jsonplaceholder.typicode.com/nonexistent')
      );
      this.errorResponse = response;
      console.log('Response:', response);
    } catch (error) {
      this.errorResponse = error;
      console.error('HTTP Error:', error);
    }
  }

  clearResults(): void {
    this.networkResponse = undefined;
    this.errorResponse = undefined;
  }
}
