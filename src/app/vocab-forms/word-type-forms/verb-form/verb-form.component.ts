import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WordTypeForm } from '../word-type-form';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerbFormComponent extends WordTypeForm implements OnInit {
  public isIrregular$!: Observable<boolean>;

  public ngOnInit(): void {
    this.isIrregular$ = this.form.controls.isIrregular!.valueChanges
      .pipe(
        map(val => val ?? false),
      );
  }
}
