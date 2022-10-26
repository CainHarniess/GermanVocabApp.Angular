import { Injectable } from "@angular/core";
import { AbstractErrorCommand } from ".";
import { ErrorTestingService } from "..";

@Injectable()
export class UnauthorisedCommand extends AbstractErrorCommand {
  public constructor(errorService: ErrorTestingService) {
    super(errorService);
  }

  public execute(): void {
    this.subscription = this.errorService.throwUnauthorised()
      .subscribe(() => console.log("Complete"));
  }
}
