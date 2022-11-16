import { Injectable } from '@angular/core';
import { filter, map, Subject, Subscription } from 'rxjs';
import { Event, EventName } from '.';

@Injectable()
export class EventService {
  private readonly subject$ = new Subject<any>();

  public emit(event: Event): void {
    this.subject$.next(event);
  }

  public on(eventName: EventName, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: Event) => e.name == eventName),
        map((e: Event) => e.value),
    ).subscribe(action);
  }
}
