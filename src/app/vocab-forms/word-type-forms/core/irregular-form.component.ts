import { Directive } from '@angular/core';
import { WordTypeFormComponent } from '.';
import { IrregularValidationVisitor } from '..';
import { ValidationErrorMessageProvider } from '../../../../core/validation';
import { FollowingControlValidatorVisitor } from '../../../forms';
import { VocabListItemForm } from '../../models';

@Directive()
export abstract class IrregularFormComponent extends WordTypeFormComponent {
  constructor(errorMessageProvider: ValidationErrorMessageProvider, protected readonly irregularValidationVisitor: IrregularValidationVisitor,
    followingValidationVisitor: FollowingControlValidatorVisitor) {
    super(errorMessageProvider, followingValidationVisitor);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.configureDynamicPrepositionCaseValidation(this.form.controls);
    this.configureDynamicIrregularValidation(this.form.controls);
  }

  protected abstract configureDynamicIrregularValidation(controls: VocabListItemForm): void;
}
