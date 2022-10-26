import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorTestingService } from '../error-testing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  public constructor(private readonly errorService: ErrorTestingService) {

  }

  public throwClientError(): any {
    return this.errorService.throwClientError();
  }

  public noContent(): Observable<any> {
    return this.errorService.noContent();
  }

  public badRequest(): Observable<any> {
    return this.errorService.throwBadRequest();
  }

  public throwUnauthorised(): Observable<any> {
    return this.errorService.throwUnauthorised();
  }
}
