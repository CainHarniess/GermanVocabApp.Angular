import { Directive, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IrregularFormComponent } from '.';
import { VocabListItemForm } from '../../models';

@Directive()
export abstract class ModifierFormComponent extends IrregularFormComponent implements OnDestroy {
  public comparativeErrorMessage$: Observable<string | null> = of(null);
  public superlativeErrorMessage$: Observable<string | null> = of(null);


  protected override configureDynamicIrregularValidation(controls: VocabListItemForm): void {
    this.irregularValidationVisitor.configure(controls.comparative, this.isIrregular$, this.destroy$);
    this.comparativeErrorMessage$ = this.errorMessageProvider.provideFor(controls.comparative);

    this.irregularValidationVisitor.configure(controls.superlative, this.isIrregular$, this.destroy$);
    this.superlativeErrorMessage$ = this.errorMessageProvider.provideFor(controls.superlative);
  }
}
