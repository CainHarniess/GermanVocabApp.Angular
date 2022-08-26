import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  // TODO: Configure third-person and perfect controls to be required if isIrregular is checked

  constructor(private controlAvailabilityService: ControlAvailabilityService) {
    super();
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.hasPreposition$.subscribe((result: boolean) => {
      const prepositionCaseControl: FormControl<Case | null> = this.form.controls.prepositionCase!
      this.controlAvailabilityService.configure(prepositionCaseControl, result);
    });
  }
}
