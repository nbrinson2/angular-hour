import { Component } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-address-editor',
  templateUrl: './address-editor.component.html',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupName }
  ],
  styleUrl: './address-editor.component.scss'
})
export class AddressEditorComponent {
  // Inject the parent FormGroupDirective
  constructor(private controlContainer: ControlContainer) {}

  // Expose the current FormGroup (the 'address' group)
  get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }

  // Helper to grab a control by name
  get(controlName: string) {
    return this.formGroup.get(controlName);
  }
}
