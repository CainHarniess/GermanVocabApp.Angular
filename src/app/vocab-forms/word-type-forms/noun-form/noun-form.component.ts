import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, Observable, startWith, takeUntil } from 'rxjs';
import { FollowingControlValidatorOptions, FollowingControlValidatorVisitor } from '../../../forms';
import { ControlAvailabilityService } from '../../../shared/services/control-availability.service';
import { Case } from '../../../vocab/models/data/case.enum';
import { FixedPlurality } from '../../../vocab/models/data/fixed-plurality.enum';
import { VocabListItemForm } from '../../models';
import { ValidationErrorMessageProvider } from '../../validation';
import { WordTypeFormComponent } from '../core';


@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent extends WordTypeFormComponent implements OnInit {
  public hasFixedPlural$!: Observable<boolean>;

  constructor(controlAvailabilityService: ControlAvailabilityService,
    errorMessageProvider: ValidationErrorMessageProvider,
    followingValidationVisitor: FollowingControlValidatorVisitor) {
    super(controlAvailabilityService, errorMessageProvider, followingValidationVisitor);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    const controls = this.form.controls;

    //TODO: Clear fixed plural value when we are removing the control
    this.hasFixedPlural$ = controls.fixedPlurality!.valueChanges
      .pipe(
        startWith(this.listItem?.fixedPlurality ?? FixedPlurality.None),
        filter((val: FixedPlurality | null) => val !== null),
        map(val => val !== FixedPlurality.None),
      );

    this.configureDynamicPrepositionCaseValidation(controls);
  }
}


