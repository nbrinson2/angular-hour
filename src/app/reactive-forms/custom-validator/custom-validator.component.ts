import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { noSpaceValidator } from '../../shared/validators/no-space.validator';
import { customValidatorCode } from '../../shared/constants/code-snippets.constants';

interface CustomValidatorForm {
  username: FormControl<string>;
  email: FormControl<string>;
}

@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrl: './custom-validator.component.scss',
})
export class CustomValidatorComponent {
  protected form!: FormGroup<CustomValidatorForm>;

  protected customValidatorCode = customValidatorCode;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group<CustomValidatorForm>({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, noSpaceValidator()],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
