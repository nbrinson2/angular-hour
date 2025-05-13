import { Component, ViewChild } from '@angular/core';
import { siblingViaServiceCode } from '../../shared/constants/code-snippets.constants';
import { NotificationService } from '../../shared/services/notification.service';
import { NotificationBannerComponent } from '../../shared/notification-banner/notification-banner.component';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-sibling-via-service',
  templateUrl: './sibling-via-service.component.html',
  styleUrl: './sibling-via-service.component.scss',
})
export class SiblingViaServiceComponent {
  @ViewChild(NotificationBannerComponent)
  protected notificationBanner!: NotificationBannerComponent;

  protected message = '';

  protected siblingViaServiceCode = siblingViaServiceCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Tightly couples unrelated components',
        description:
          'Using @ViewChild to directly access a sibling component breaks encapsulation and creates a hard dependency between components that should remain unaware of each other’s internal behavior.',
      },
      {
        label: 'Contradicts the shared service pattern',
        description:
          'The NotificationBannerComponent is already subscribing to NotificationService. Calling its methods directly bypasses that pattern, leading to inconsistent state handling and harder-to-maintain code.',
      },
      {
        label: 'Shared service supports scalability and testability',
        description:
          'Services can be mocked and tested independently. Using @ViewChild to manually call component methods makes testing and scaling more fragile.'
      }

    ],
  };

  constructor(private notificationService: NotificationService) {}

  send() {
    if (this.message.trim()) {
      this.notificationService.send(this.message);
      this.message = '';
    }
  }

  dismiss() {
    this.notificationBanner.dismiss();
  }
}
