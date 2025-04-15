import { Injectable, signal, Signal } from '@angular/core';
import { breadcrumbsCode } from '../constants/code-snippets.constants';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  get breadcrumbCodeSnippet(): Signal<string> {
    return this._breadcrumbCodeSnippet.asReadonly();
  }

  private _breadcrumbCodeSnippet = signal<string>(breadcrumbsCode);

  setBreadcrumbCodeSnippet(code: string): void {
    this._breadcrumbCodeSnippet.set(code);
  }
}
