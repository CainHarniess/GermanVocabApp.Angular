import { EventName } from ".";

export class Event {
  public constructor(public readonly name: EventName, public readonly value: any) {

  }
}
