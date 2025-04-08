import { Component } from '@angular/core';
import { canLoadGuardCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-can-load-guard',
  templateUrl: './can-load-guard.component.html',
  styleUrl: './can-load-guard.component.scss'
})
export class CanLoadGuardComponent {

  canLoadGuardCode = canLoadGuardCode;
}
