import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class OsirisComponent implements OnDestroy {
  protected readonly destroy$ = new Subject<boolean>();

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }
}
