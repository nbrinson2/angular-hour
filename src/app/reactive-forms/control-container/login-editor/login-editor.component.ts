import { Component } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-login-editor',
  templateUrl: './login-editor.component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName }
  ],
  styleUrl: './login-editor.component.scss'
})
export class LoginEditorComponent {
  constructor(private controlContainer: ControlContainer) {}

  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  get(controlName: string) {
    return this.formGroup.get(controlName);
  }
}
