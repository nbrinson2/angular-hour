import { Component } from '@angular/core';
import { EventItem, EVENTS } from '../shared/constants/events.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  events = this.filterPastEvents(EVENTS);

  private filterPastEvents(events: EventItem[]): EventItem[] {
    return events.filter(event => event.date >= new Date());
  }
}
