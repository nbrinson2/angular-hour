export interface EventItem {
  date: Date;
  day: string;
  time: string;
  host: string;
  topic: string;
}

// A list of events that can be updated or added to by others.
export const EVENTS: EventItem[] = [
  {
    date: new Date('2025-04-08T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Resolvers and Guards',
  },
  {
    date: new Date('2025-04-22T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Paul',
    topic: 'Testing Part 1',
  },
  {
    date: new Date('2025-04-29T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Paul',
    topic: 'Testing Part 2',
  },
  {
    date: new Date('2025-04-15T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Breadcrumbs',
  },
  {
    date: new Date('2025-05-06T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Types and Typescript Generics',
  },
  {
    date: new Date('2025-05-13T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Component Communication',
  },
  {
    date: new Date('2025-05-27T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Reactive Forms',
  },
  {
    date: new Date('2025-06-03T13:00:00'),
    day: 'Tuesday',
    time: '1:00 PM',
    host: 'Nick',
    topic: 'Standalone Components',
  }
];
