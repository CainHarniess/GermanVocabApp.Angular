import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs';
import { OsirisComponent } from '../../../core';
import { ErrorTestingService } from '../error-testing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends OsirisComponent implements OnDestroy {
  public constructor(private readonly errorService: ErrorTestingService) {
    super();
  }

  public clientError(): void {
    this.errorService.throwClientError();
  }

  public noContent(): void {
    this.errorService.noContent()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => { });
  }

  public badRequest(): void {
    this.errorService.throwBadRequest()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => { });
  }

  public unauthorised(): void {
    this.errorService.throwUnauthorised()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(() => { });
  }
}
