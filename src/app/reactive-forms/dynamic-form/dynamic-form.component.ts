import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dynamicFormCode } from '../../shared/constants/code-snippets.constants';

interface HeroFormControls {
  heroName: FormControl<string>;
  aliases: FormArray<FormControl<string>>;
}


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  get aliases(): FormArray<FormControl<string>> {
    return this.heroForm.controls.aliases;
  }

  protected heroForm!: FormGroup<HeroFormControls>;

  protected dynamicFormCode = dynamicFormCode;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.heroForm = this.fb.group<HeroFormControls>({
      heroName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      aliases: this.fb.array<FormControl<string>>(
        [ new FormControl('', { nonNullable: true, validators: [Validators.required] }) ]
      )
    });
  }

  addAlias(): void {
    this.aliases.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
  }

  removeAlias(index: number): void {
    this.aliases.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.heroForm.value);
  }
}
