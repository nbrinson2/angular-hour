import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { simpleFormCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss',
})
export class SimpleFormComponent {
  protected userForm!: FormGroup;
  protected loading = false;

  protected simpleFormCode = simpleFormCode;

  protected validators = [
    {
      name: 'Validators.required',
      desc: 'Fails if the control\'s value is empty (null, undefined or empty string)',
    },
    {
      name: 'Validators.requiredTrue',
      desc: 'Fails unless the control\'s value is true (e.g. agree to terms)',
    },
    {
      name: 'Validators.email',
      desc: 'Fails if the control\'s value isn\'t a valid email address',
    },
    {
      name: 'Validators.minLength(min)',
      desc: 'Fails if the string length is less than min',
    },
    {
      name: 'Validators.maxLength(max)',
      desc: 'Fails if the string length is greater than max',
    },
    {
      name: 'Validators.pattern(pattern)',
      desc: 'Fails if the control\'s value does not match the regex pattern',
    },
    {
      name: 'Validators.min(min)',
      desc: 'Fails if the control\'s numeric value is less than min',
    },
    {
      name: 'Validators.max(max)',
      desc: 'Fails if the control\'s numeric value is greater than max',
    },
    {
      name: 'Validators.nullValidator',
      desc: 'Always passes (no-op validator)',
    },
    {
      name: 'Validators.compose([...])',
      desc: 'Combines multiple synchronous validators into one',
    },
    {
      name: 'Validators.composeAsync([...])',
      desc: 'Combines multiple async validators into one',
    },
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.loading = true;

    // simulate a submit call
    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('User information saved', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
      });
      this.userForm.reset();
    }, 1500);
  }
}
