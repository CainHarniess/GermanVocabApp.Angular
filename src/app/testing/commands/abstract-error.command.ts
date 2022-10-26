import { BehaviorSubject, Subscription } from "rxjs";
import { ErrorTestingService } from "..";
import { Command } from "../../../core";

export abstract class AbstractErrorCommand implements Command {
  protected subscription?: Subscription;

  public constructor(protected readonly errorService: ErrorTestingService) {

  }

  public abstract execute(): void;
  public readonly canExecute$ = new BehaviorSubject<boolean>(true);

  public unsubscribe(): void {
    this.subscription?.unsubscribe();
  }
}
