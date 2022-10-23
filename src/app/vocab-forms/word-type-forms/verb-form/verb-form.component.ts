import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';

import { takeUntil } from 'rxjs';
import { IrregularValidationVisitor } from '..';
import { ControlValidatorVisitor, FollowingControlValidatorOptions, FollowingControlValidatorVisitor } from '../../../forms';

import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { Case } from '../../../vocab/models/data/case.enum';
import { ValidationErrorMessageProvider } from '../../validation';
import { WordTypeFormComponent } from '../core';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IrregularValidationVisitor],
})
export class VerbFormComponent extends WordTypeFormComponent {
  constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider, private readonly irregularValidationVisitor: IrregularValidationVisitor) {
    super(controlAvailabilityService, errorMessageProvider);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.form.controls;

    this.hasPreposition$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result: boolean) => {
        const prepositionCaseControl: FormControl<Case | null> = controls.prepositionCase;
        this.controlAvailabilityService.configure(prepositionCaseControl, result);
      });

    this.irregularValidationVisitor.configure(controls.thirdPersonPresent, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.thirdPersonImperfect, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.perfect, this.isIrregular$, this.destroy$);
  }
}
