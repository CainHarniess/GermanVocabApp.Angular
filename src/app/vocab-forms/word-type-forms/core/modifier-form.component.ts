import { Directive, OnDestroy } from '@angular/core';
import { IrregularFormComponent } from '.';
import { VocabListItemForm } from '../../models';

@Directive()
export abstract class ModifierFormComponent extends IrregularFormComponent implements OnDestroy {
  public override ngOnInit(): void {
    super.ngOnInit();
    this.configureDynamicIrregularValidation(this.form.controls);
  }

  protected override configureDynamicIrregularValidation(controls: VocabListItemForm): void {
    this.irregularValidationVisitor.configure(controls.comparative, this.isIrregular$, this.destroy$);
    this.irregularValidationVisitor.configure(controls.superlative, this.isIrregular$, this.destroy$);
  }
}
