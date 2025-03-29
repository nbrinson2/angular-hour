import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { exhaustMap, delay, tap } from 'rxjs/operators';
import { exhaustMapExampleCode } from '../../constants/code-snippets.constants';

@Component({
  selector: 'app-exhaust-map-example',
  templateUrl: './exhaust-map-example.component.html',
  styleUrls: ['./exhaust-map-example.component.scss']
})
export class ExhaustMapExampleComponent {

  form: FormGroup;
  submissionResults: string[] = [];
  exhaustMapExampleCode = exhaustMapExampleCode;
  private submit$ = new Subject<void>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: ['']
    });

    // Handle form submissions using exhaustMap
    this.submit$.pipe(
      exhaustMap(() => this.mockApiCall(this.form.value))
    ).subscribe(result => {
      this.submissionResults.push(result);
      console.log(result); // Logs the result of the API call
    });
  }

  onSubmit(): void {
    // Emit a submission event
    this.submit$.next();
  }

  mockApiCall(formData: any) {
    console.log('Processing submission:', formData);
    return of(`Submission successful for ${formData.name} (${formData.email})`).pipe(
      delay(3000), // Simulate a 3-second API call
      tap(() => console.log('API call completed'))
    );
  }
}