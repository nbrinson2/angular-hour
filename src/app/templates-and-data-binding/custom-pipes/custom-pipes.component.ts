import { Component } from '@angular/core';
import { customPipesCode } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { trigger } from '@angular/animations';
import { query, stagger, style, transition } from '@angular/animations';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-custom-pipes',
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.scss',
  animations: [
    trigger('statusChange', [
      transition('* => *', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('250ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    trigger('singleChipSlide', [
      transition('false => true, true => false', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class CustomPipesComponent {
  protected customPipesCode = customPipesCode;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Declare and export the pipe: ',
        description:
          'Create a new file for the pipe and declare it in the declarations array of the module.',
      },
      {
        label: 'Use the pipe',
        description: 'in the template.',
      },
    ],
  };

  protected routeName = 'user_profile-settings';
  protected status = 'active';
  protected statusHistory: string[] = [];
  protected statusKey = 0; // triggers animation manually
  protected statusHistoryAnimationState = false; // triggers animation manually

  protected changeStatus() {
    this.statusHistory.unshift(this.status);
    const statuses = ['active', 'inactive', 'pending', 'unknown'];
    this.status = statuses[Math.floor(Math.random() * statuses.length)];
    this.statusKey++; // increment key to trigger animation
    setTimeout(() => {
      this.statusHistoryAnimationState = !this.statusHistoryAnimationState; // toggle state
    }, 0);
  }

  protected trackByStatus(index: number, item: string) {
    return item + '-' + index;
  }
}
