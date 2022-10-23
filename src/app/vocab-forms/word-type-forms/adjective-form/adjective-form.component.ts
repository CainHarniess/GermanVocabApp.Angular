import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IrregularValidationVisitor } from '..';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { ValidationErrorMessageProvider } from '../../validation';
import { ModifierFormComponent } from '../core/modifier-form.component';

@Component({
  selector: 'adjective-form',
  templateUrl: './adjective-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdjectiveFormComponent extends ModifierFormComponent {
  public constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider,
    irregularValidationVisitor: IrregularValidationVisitor) {
    super(controlAvailabilityService, errorMessageProvider, irregularValidationVisitor);
  }
}
