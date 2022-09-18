import { Directive, OnDestroy } from '@angular/core';
import { Subscription, takeUntil } from 'rxjs';
import { ControlAvailabilityService } from '../../shared/services/control-availability.service';
import { WordTypeForm } from './word-type-form';

@Directive()
export abstract class ModifierWordTypeForm extends WordTypeForm implements OnDestroy {
  constructor(controlAvailabilityService: ControlAvailabilityService) {
    super(controlAvailabilityService);
  }

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
