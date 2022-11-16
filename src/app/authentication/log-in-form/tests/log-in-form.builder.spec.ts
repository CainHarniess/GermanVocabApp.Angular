import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { LogInForm } from "..";
import { Null } from "../../../../core/types";
import { FormValidationProvider } from "../../../forms";
import { LogInFormBuilder } from "../log-in-form.builder";

describe(`${LogInFormBuilder.name}`, () => {
  let fb = new FormBuilder();

  let mockForm: FormGroup<LogInForm>;
  let mockControl: FormControl<string | null>;

  let validationProvider: FormValidationProvider<LogInForm>;
  let builder: LogInFormBuilder;

  beforeEach(() => {
    mockControl = fb.control<Null<string>>(null);
    mockForm = fb.group<LogInForm>({
      username: mockControl,
      password: mockControl,
    });

    validationProvider = {
      provide: (form: FormGroup<LogInForm>) => form,
    };

    builder = new LogInFormBuilder(fb, validationProvider);
  });

  it("Should do other studff.", () => {
    const form: FormGroup<LogInForm> = builder.build();
    expect(form.controls.username.value).toBeNull();
    expect(form.controls.password.value).toBeNull();
  });

  it("Should apply the validation provider to the created form.", () => {
    spyOn(fb, "group").and.returnValue(mockForm);
    spyOn(validationProvider, "provide");

    builder.build();

    expect(validationProvider.provide).toHaveBeenCalledOnceWith(mockForm);
  });
});
