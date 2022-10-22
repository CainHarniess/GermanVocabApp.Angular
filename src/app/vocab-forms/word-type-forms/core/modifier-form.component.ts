import { Directive, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs';
import { WordTypeFormComponent } from './word-type-form.component';

@Directive()
export abstract class ModifierFormComponent extends WordTypeFormComponent implements OnDestroy {
  public override ngOnInit(): void {
    super.ngOnInit();

    this.irregularControls = [
      this.form.controls.comparative!,
      this.form.controls.superlative!,
    ];

    this.isIrregular$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: boolean) => {
        this.controlAvailabilityService.configure(this.irregularControls, result);
      });
  }
}
