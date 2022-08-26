import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { Case } from '../../../vocab/models/data/case.enum';

import { WordTypeForm } from '../word-type-form';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbFormComponent extends WordTypeForm {
  constructor(controlAvailabilityService: ControlAvailabilityService) {
    super(controlAvailabilityService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    this.irregularControls = [
      this.form.controls.thirdPersonPresent!,
      this.form.controls.thirdPersonImperfect!,
      this.form.controls.perfect!,
    ];

    this.hasPreposition$.subscribe((result: boolean) => {
      const prepositionCaseControl: FormControl<Case | null> = this.form.controls.prepositionCase!
      this.controlAvailabilityService.configure(prepositionCaseControl, result);
    });

    this.isIrregular$.subscribe((result: boolean) => {
      this.controlAvailabilityService.configure(this.irregularControls, result);
    });
  }
}
