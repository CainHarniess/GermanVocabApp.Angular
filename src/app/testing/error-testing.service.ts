import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorTestingService {
  constructor(private readonly http: HttpClient) {

  }

  private readonly urlRoot: string = "/api/v1/testing";

  public throwClientError(): void {
    throw new Error("An unexpected client-side error occured.");
  }

  public throwUnauthorised(): Observable<any> {
    //return this.http.get(`${this.urlRoot}/unauthorised`);
    throw new Error("401 UNAUTHORIZED");
  }

  public throwBadRequest(): Observable<any> {
    throw new Error("400 BAD REQUEST");
    //return this.http.post<any>(`${this.urlRoot}/bad-request`, { });
  }
}
