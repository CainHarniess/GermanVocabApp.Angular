import { Directive } from '@angular/core';
import { WordTypeFormComponent } from '.';
import { IrregularValidationVisitor } from '..';
import { FollowingControlValidatorVisitor } from '../../../forms';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { VocabListItemForm } from '../../models';
import { ValidationErrorMessageProvider } from '../../validation';

@Directive()
export abstract class IrregularFormComponent extends WordTypeFormComponent {
  constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider, protected readonly irregularValidationVisitor: IrregularValidationVisitor,
    followingValidationVisitor: FollowingControlValidatorVisitor) {
    super(controlAvailabilityService, errorMessageProvider, followingValidationVisitor);
  }

  protected abstract configureDynamicIrregularValidation(controls: VocabListItemForm): void;
}
