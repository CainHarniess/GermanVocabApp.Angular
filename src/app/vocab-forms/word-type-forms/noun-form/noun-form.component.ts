import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, Observable } from 'rxjs';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { Case } from '../../../vocab/models/data/case.enum';
import { FixedPlurality } from '../../../vocab/models/data/fixed-plurality.enum';

import { WordTypeForm } from '../word-type-form';

@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent extends WordTypeForm implements OnInit {
  public hasFixedPlural$!: Observable<boolean>;

  constructor(controlAvailabilityService: ControlAvailabilityService) {
    super(controlAvailabilityService);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.hasFixedPlural$ = this.form.controls.fixedPlurality!.valueChanges
      .pipe(
        filter((val: FixedPlurality | null)  => val !== null),
        map(val => val !== FixedPlurality.None),
    );

    this.hasPreposition$.subscribe((result: boolean) => {
      const prepositionCaseControl: FormControl<Case | null> = this.form.controls.prepositionCase!
      this.controlAvailabilityService.configure(prepositionCaseControl, result);
    });
  }
}


