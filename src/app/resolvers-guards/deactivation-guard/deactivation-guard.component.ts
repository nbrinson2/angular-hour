import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../../shared/guards/can-deactivate.guard';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { deactivationGuardCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-deactivation-guard',
  templateUrl: './deactivation-guard.component.html',
  styleUrl: './deactivation-guard.component.scss'
})
export class DeactivationGuardComponent implements CanComponentDeactivate {
  profileForm: FormGroup;
  isSubmitted = false;

  deactivationGuardCode = deactivationGuardCode;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  save(): void {
    this.isSubmitted = true;
    this.profileForm.markAsPristine();
    alert('Profile saved!');
  }

  canDeactivate(): boolean {
    return this.profileForm.pristine || this.isSubmitted;
  }

}
