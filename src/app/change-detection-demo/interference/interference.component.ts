import { Component } from '@angular/core';

@Component({
  selector: 'app-interference',
  templateUrl: './interference.component.html',
  styleUrls: ['./interference.component.scss']
})
export class InterferenceComponent {
  activeTab: 'lifecycle' | 'loop' | 'destroyed' | 'subscription' | 'signal' = 'lifecycle';
}
