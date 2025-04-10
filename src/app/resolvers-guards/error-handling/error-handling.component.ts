import { Component } from '@angular/core';
import { errorHandlingCode } from '../../shared/constants/code-snippets.constants';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss'
})
export class ErrorHandlingComponent {

  errorHandlingCode = errorHandlingCode;

}
