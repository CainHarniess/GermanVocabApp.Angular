import { Directive, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '.';
import { OsirisComponent } from '../../core';
import { LogService } from '../../core/logging';
import { ValidationErrorMessageProvider } from '../vocab-forms/validation';

@Directive()
export abstract class FormComponent<TFormModel extends FormModel<TFormModel> = any> extends OsirisComponent
  implements OnInit {
  private _form!: FormGroup<TFormModel>;

  protected constructor(protected readonly logService: LogService,
    protected readonly errorMessageProvider: ValidationErrorMessageProvider,) {
    super();
  }

  public get form(): FormGroup<TFormModel> {
    return this._form;
  }
  protected set form(value: FormGroup<TFormModel>) {
    this._form = value;
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  protected abstract buildForm(): void;
}
