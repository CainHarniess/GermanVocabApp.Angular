import { Directive, OnDestroy } from '@angular/core';
import { IrregularValidationVisitor } from '..';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { ValidationErrorMessageProvider } from '../../validation';
import { WordTypeFormComponent } from './word-type-form.component';

@Directive()
export abstract class ModifierFormComponent extends WordTypeFormComponent implements OnDestroy {
  public constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider,
    private readonly irregularValidationVisitor: IrregularValidationVisitor) {
    super(controlAvailabilityService, errorMessageProvider);
  }
  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.form.controls;
    this.irregularValidationVisitor.configure(controls.comparative, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.superlative, this.isIrregular$, this.destroy$);
  }
}
