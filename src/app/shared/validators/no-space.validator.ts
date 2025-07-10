import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasSpace = /\s/.test(control.value as string);
    return hasSpace
      ? { noSpace: { message: 'Spaces are not allowed' } }
      : null;
  };
}
