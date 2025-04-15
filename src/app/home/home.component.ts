import { Component, OnInit, OnDestroy, computed, signal } from '@angular/core';
import { EventItem, EVENTS } from '../shared/constants/events.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // If the first event is happening now, show the timer/badge on the following event.
  get displayedNextEvent(): EventItem | null {
    if (this.events.length === 0) {
      return null;
    }
    if (this.isHappeningNowSignal() && this.events.length > 1) {
      return this.events[1];
    }
    return this.events[0];
  }

  events: EventItem[] = this.filterAndSortEvents(EVENTS);
  nextEvent = this.events.length > 0 ? this.events[0] : null;

  // Signal holding the current date/time.
  now = signal(new Date());
  timeUntilNextEvent = computed(() => this.calculateTimeUntilNextEvent());
  isHappeningNowSignal = computed(() => this.isHappeningNow());

  // Reference for the interval timer.
  private timerInterval!: number;

  ngOnInit(): void {
    // Update the time remaining every second.
    this.timerInterval = window.setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private filterAndSortEvents(events: EventItem[]): EventItem[] {
    const now = new Date();
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0);

    return events
      .filter((event) => {
        const eventDateTime = new Date(event.date);
        const eventMidnight = new Date(eventDateTime);
        eventMidnight.setHours(0, 0, 0, 0);

        if (eventMidnight.getTime() > todayMidnight.getTime()) {
          // Event is on a future day.
          return true;
        } else if (eventMidnight.getTime() === todayMidnight.getTime()) {
          // Event is today; allow it only if the current time is before one hour after the event's start.
          const eventEndTime = new Date(
            eventDateTime.getTime() + 60 * 60 * 1000
          );
          return now < eventEndTime;
        }
        // Otherwise, the event is in the past.
        return false;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  private calculateTimeUntilNextEvent(): string {
    const targetEvent = this.displayedNextEvent;
    if (!targetEvent) {
      return '';
    }

    const now = this.now();
    const eventDate = new Date(targetEvent.date);
    const timeDiff = eventDate.getTime() - now.getTime();

    if (timeDiff <= 0) {
      this.filterAndSortEvents(EVENTS);
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s until the next event`;
  }

  private isHappeningNow(): boolean {
    if (!this.nextEvent) {
      return false;
    }
    const current = this.now();
    const eventStart = new Date(this.nextEvent.date);

    // For demonstration, assume each event lasts 1 hour.
    const eventEnd = new Date(eventStart.getTime() + 60 * 60 * 1000);
    return current >= eventStart && current < eventEnd;
  }
}
