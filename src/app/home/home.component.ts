import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventItem, EVENTS } from '../shared/constants/events.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  events: EventItem[] = this.filterAndSortEvents(EVENTS);
  nextEvent = this.events.length > 0 ? this.events[0] : null;
  timeUntilNextEvent = this.calculateTimeUntilNextEvent();
  
  // Reference for the interval timer.
  private timerInterval!: number;

  ngOnInit(): void {
    // Update the time remaining every second.
    this.timerInterval = window.setInterval(() => {
      this.timeUntilNextEvent = this.calculateTimeUntilNextEvent();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private filterAndSortEvents(events: EventItem[]): EventItem[] {
    // Get today's date at midnight.
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA.getTime() - dateB.getTime();
      });
  }

  private calculateTimeUntilNextEvent(): string {
    if (!this.nextEvent) {
      return '';
    }

    const now = new Date();
    const eventDate = new Date(this.nextEvent.date);
    const timeDiff = eventDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      return 'Event is happening now!';
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s until the next event`;
  }
}
