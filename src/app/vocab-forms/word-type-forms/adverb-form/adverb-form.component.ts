import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { ValidationErrorMessageProvider } from '../../validation';
import { ModifierFormComponent } from '../core/modifier-form.component';

@Component({
  selector: 'adverb-form',
  templateUrl: './adverb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdverbFormComponent extends ModifierFormComponent {
  public constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider) {
    super(controlAvailabilityService, errorMessageProvider);
  }
}
