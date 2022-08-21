import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
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

  public override ngOnInit(): void {
    super.ngOnInit();
    this.hasFixedPlural$ = this.form.controls.fixedPlurality!.valueChanges
      .pipe(
        filter((val: FixedPlurality | null)  => val !== null),
        map(val => val !== FixedPlurality.None),
      );
  }
}


