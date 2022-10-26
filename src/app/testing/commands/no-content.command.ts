import { Injectable } from "@angular/core";
import { AbstractErrorCommand } from ".";
import { ErrorTestingService } from "..";

@Injectable()
export class NoContentCommand extends AbstractErrorCommand {
  public constructor(errorService: ErrorTestingService) {
    super(errorService);
  }

  public execute(): void {
    this.subscription = this.errorService.noContent()
      .subscribe(() => console.log("Complete"));
  }
}
