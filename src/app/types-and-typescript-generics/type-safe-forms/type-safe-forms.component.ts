import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { typeSafeFormsCode } from '../../shared/constants/code-snippets.constants';
export interface ProfileFormValues {
  name: string;
  email: string;
  age: number | null;
}

@Component({
  selector: 'app-type-safe-forms',
  templateUrl: './type-safe-forms.component.html',
  styleUrl: './type-safe-forms.component.scss',
})
export class TypeSafeFormsComponent {
  typeSafeFormsCode = typeSafeFormsCode;
  exampleInfo: InfoItem = {

    bulletPoints: [
      {
        description: 'Form values are typed as ProfileFormValues rather than any',
      },
      {
        description: 'Catches typos and missing fields immediately',
      },
      {
        description: 'No type casting needed when submitting',
      },
      {
        description: 'Easier to maintain and refactor as forms grow',
      },
    ],
  };

  formSubmitted = false;
  submittedData: ProfileFormValues | null = null;
  form = new FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    age: FormControl<number | null>;
  }>({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    age: new FormControl(null)
  });

  submit() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      console.log('Form Submitted!', formData);
      this.submittedData = formData;   // Store the submission
      this.formSubmitted = true;
    } else {
      console.warn('Form Invalid');
      this.formSubmitted = false;
    }
  }
}
