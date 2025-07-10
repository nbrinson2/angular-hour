import { Component } from '@angular/core';
import { controlContainerCode } from '../../shared/constants/code-snippets.constants';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

interface ControlContainerForm {
  name: FormControl<string>;
  child1: FormGroup<{
    address: FormGroup<{
      street: FormControl<string>;
      city: FormControl<string>;
    }>;
  }>;
  child2: FormGroup<{
    login: FormGroup<{
      username: FormControl<string>;
      password: FormControl<string>;
    }>;
  }>;
}

@Component({
  selector: 'app-control-container',
  templateUrl: './control-container.component.html',
  styleUrl: './control-container.component.scss'
})
export class ControlContainerComponent {
  protected controlContainerCode = controlContainerCode;

  protected userForm!: FormGroup<ControlContainerForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group<ControlContainerForm>({
      name:    new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      child1:  this.fb.group({
        address: this.fb.group({
          street: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
          city:   new FormControl('', { nonNullable: true, validators: [Validators.required] })
        })
      }),
      child2:  this.fb.group({
        login: this.fb.group({
          username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
          password: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] })
        })
      })
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
