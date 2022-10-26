import { Injectable } from "@angular/core";
import { AbstractErrorCommand } from ".";
import { ErrorTestingService } from "..";

@Injectable()
export class BadRequestCommand extends AbstractErrorCommand {
  public constructor(errorService: ErrorTestingService) {
    super(errorService);
  }

  public execute(): void {
    this.subscription = this.errorService.throwBadRequest()
      .subscribe(() => console.log("Complete"));
  }
}
