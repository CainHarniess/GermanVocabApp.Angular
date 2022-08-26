import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ControlAvailabilityService } from '../../shared/services/control-availability.service';
import { WordTypeForm } from './word-type-form';

@Directive()
export abstract class ModifierWordTypeForm extends WordTypeForm implements OnDestroy {
  private isIrregular!: Subscription;

  constructor(controlAvailabilityService: ControlAvailabilityService) {
    super(controlAvailabilityService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    this.irregularControls = [
      this.form.controls.comparative!,
      this.form.controls.superlative!,
    ];

    this.isIrregular = this.isIrregular$.subscribe((result: boolean) => {
      this.controlAvailabilityService.configure(this.irregularControls, result);
    });
  }

  public ngOnDestroy(): void {
    this.isIrregular.unsubscribe();
  }
}
