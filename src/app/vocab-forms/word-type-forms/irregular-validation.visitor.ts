import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { Observable } from "rxjs";
import { FollowingControlValidatorOptions, FollowingControlValidatorVisitor } from "../../forms";
import { wordMaxLength, wordMinLength } from "../../vocab/models/data/constraints/item-data-constraints";
import { StringLengthValidatorFactory } from "../validation";

@Injectable()
export class IrregularValidationVisitor {
  public constructor(private readonly followingControlVisitor: FollowingControlValidatorVisitor,
    private readonly validatorFactory: StringLengthValidatorFactory) {

  }

  public configure(control: AbstractControl<any>, isVisible$: Observable<boolean>,
    notifier$: Observable<boolean>): void {
    const options = new FollowingControlValidatorOptions(control, isVisible$, notifier$,
      this.validatorFactory.create(wordMinLength, wordMaxLength))

    this.followingControlVisitor.configure(options);
  }
}
