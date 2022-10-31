import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, Observable, tap } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`${HttpErrorInterceptor.name} - ${req.url}`);

    return next.handle(req)
      .pipe(
        filter((e: HttpEvent<any>) => e.type === HttpEventType.Response),
        tap((e: HttpEvent<any>) => console.log(e)),
    )
  }
}
