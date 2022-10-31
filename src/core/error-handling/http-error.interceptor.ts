import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LogContent } from "../logging";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          const logContent: LogContent = {
            message: "",
          };

          if (e.error instanceof ErrorEvent) {
            logContent.message = e.error.message;
          } else if (e instanceof HttpErrorResponse) {
            const errorResponse: HttpErrorResponse = e;
            logContent.message = `${errorResponse.status} ${errorResponse.statusText}`;
            logContent.reason = `${errorResponse.message}`;
          }

          return throwError(logContent);
        }),
      );
  }
}
