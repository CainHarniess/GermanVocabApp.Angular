import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationService } from "..";
import { LogContent, LogService } from "../logging";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly logService: LogService;
  private readonly notificationService: NotificationService;

  public constructor(injector: Injector) {
    this.logService = injector.get(LogService);
    this.notificationService = injector.get(NotificationService);
  }

  handleError(e: any): void {
    const logContent: LogContent = {
      message: "",
    };

    if (e instanceof ErrorEvent) {
      logContent.message = e.message;
    } else if (e instanceof HttpErrorResponse) {
      const errorResponse: HttpErrorResponse = e;
      logContent.message = `${errorResponse.status} ${errorResponse.statusText}`;
      logContent.reason = `${errorResponse.message}`;
    } else if (e instanceof Error) {
      logContent.message = e.message;
      logContent.reason = e.stack;
    }

    this.logService.error(logContent);
    this.notificationService.error(logContent.message);
  }
}
