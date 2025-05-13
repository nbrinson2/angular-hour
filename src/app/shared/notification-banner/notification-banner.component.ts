import { animate, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { style } from '@angular/animations';
import { transition } from '@angular/animations';

@Component({
  selector: 'app-notification-banner',
  templateUrl: './notification-banner.component.html',
  styleUrl: './notification-banner.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-5px)' })),
      ]),
    ]),
  ],

})
export class NotificationBannerComponent {
  protected message: string | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe(msg => {
      this.message = msg;
    });
  }

  dismiss() {
    this.message = null;
  }
}
