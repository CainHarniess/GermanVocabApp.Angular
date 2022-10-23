import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IrregularValidationVisitor } from '..';
import { FollowingControlValidatorVisitor } from '../../../forms';

import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { VocabListItemForm } from '../../models';
import { ValidationErrorMessageProvider } from '../../validation';
import { IrregularFormComponent } from '../core';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerbFormComponent extends IrregularFormComponent {
  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.form.controls;

    this.configureDynamicPrepositionCaseValidation(controls);
    this.configureDynamicIrregularValidation(controls);
  }

  protected override configureDynamicIrregularValidation(controls: VocabListItemForm): void {
    this.irregularValidationVisitor.configure(controls.thirdPersonPresent, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.thirdPersonImperfect, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.perfect, this.isIrregular$, this.destroy$);
  }
}
