import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { takeUntil } from 'rxjs';

import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { Case } from '../../../vocab/models/data/case.enum';
import { ValidationErrorMessageProvider } from '../../validation';
import { WordTypeFormComponent } from '../core';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbFormComponent extends WordTypeFormComponent {
  constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider) {
    super(controlAvailabilityService, errorMessageProvider);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.form.controls;

    this.irregularControls = [
      controls.thirdPersonPresent,
      controls.thirdPersonImperfect,
      controls.perfect,
    ];

    this.hasPreposition$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: boolean) => {
        const prepositionCaseControl: FormControl<Case | null> = controls.prepositionCase;
        this.controlAvailabilityService.configure(prepositionCaseControl, result);
      });

    // TODO: Update to accept validators to be configured against each control.
    this.isIrregular$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: boolean) => {
        this.controlAvailabilityService.configure(this.irregularControls, result);
      });
  }
}
