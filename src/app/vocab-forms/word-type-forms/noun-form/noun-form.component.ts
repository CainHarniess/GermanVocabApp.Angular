import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, startWith } from 'rxjs';
import { FollowingControlValidatorVisitor } from '../../../forms';
import { FixedPlurality } from '../../../vocab/models/data/fixed-plurality.enum';
import { ValidationErrorMessageProvider } from '../../validation';
import { WordTypeFormComponent } from '../core';


@Component({
  selector: 'noun-form',
  templateUrl: './noun-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NounFormComponent extends WordTypeFormComponent implements OnInit {
  public pluralErrorMessage$: Observable<string | null> = of(null);
  public hasFixedPlural$!: Observable<boolean>;

  constructor(errorMessageProvider: ValidationErrorMessageProvider,
    followingValidationVisitor: FollowingControlValidatorVisitor) {
    super(errorMessageProvider, followingValidationVisitor);
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

    this.pluralErrorMessage$ = this.errorMessageProvider.provideFor(controls.plural);

    this.configureDynamicPrepositionCaseValidation(controls);
  }
}


