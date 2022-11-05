import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { NotificationService } from '../../../core';

// TODO: Add tests.
@Injectable()
export class HttpErrorHandler {
  constructor(private readonly notificationService: NotificationService) {

  }

  public handle(e: any, messageGenerator: (e: any) => string): Observable<never> {
    if (!(e instanceof HttpErrorResponse)) {
      return this.handleNonHttpError(e, "Unable to retrieve vocab list due to non-HTTP error.");
    }

    let message: string = messageGenerator(e);

    const notification: string = `${e.status} ${e.statusText}. ${message}.`;
    this.notificationService.error(notification);
    return throwError(() => new Error(notification));
  }

  private handleNonHttpError(e: any, userMessage: string): Observable<never> {
    this.notificationService.error(userMessage);
    const error: Error = new Error(userMessage)
    return throwError(() => error);
  }
}
