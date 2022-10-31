import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { ControlPanelComponent, ErrorTestingService } from '..';

@Component({
  selector: 'testing-error-control-panel',
  templateUrl: './error-control-panel.component.html',
  styleUrls: ['../control-panel/control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorControlPanelComponent extends ControlPanelComponent {
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
