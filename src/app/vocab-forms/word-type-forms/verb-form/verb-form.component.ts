import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { VocabListItemForm } from '../../models';
import { IrregularFormComponent } from '../core';

@Component({
  selector: 'verb-form',
  templateUrl: './verb-form.component.html',
  styleUrls: ['../../vocab-list-item-form/vocab-list-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerbFormComponent extends IrregularFormComponent {
  public thirdPersonPresentErrorMessage$: Observable<string | null> = of(null);
  public thirdPersonImperfectErrorMessage$: Observable<string | null> = of(null);
  public perfectErrorMessage$: Observable<string | null> = of(null);

  protected override configureDynamicIrregularValidation(controls: VocabListItemForm): void {
    this.irregularValidationVisitor.configure(controls.thirdPersonPresent, this.isIrregular$, this.destroy$);
    this.thirdPersonPresentErrorMessage$ = this.errorMessageProvider.provideFor(controls.thirdPersonPresent);

    this.irregularValidationVisitor.configure(controls.thirdPersonImperfect, this.isIrregular$, this.destroy$);
    this.thirdPersonImperfectErrorMessage$ = this.errorMessageProvider.provideFor(controls.thirdPersonImperfect);

    this.irregularValidationVisitor.configure(controls.perfect, this.isIrregular$, this.destroy$);
    this.perfectErrorMessage$ = this.errorMessageProvider.provideFor(controls.perfect);
  }
}
