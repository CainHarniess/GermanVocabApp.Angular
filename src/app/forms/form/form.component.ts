import { Directive, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { OsirisComponent } from '../../../core';
import { LogService } from '../../../core/logging';

type FormModel<TFormModel> = {
  [K in keyof TFormModel]: AbstractControl<any>;
};

@Directive()
export abstract class FormComponent<TFormModel extends FormModel<TFormModel> = any> extends OsirisComponent
  implements OnInit {
  private _form!: FormGroup<TFormModel>;

  protected constructor(private readonly logService: LogService) {
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
