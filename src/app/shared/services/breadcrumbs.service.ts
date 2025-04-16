import { Injectable, signal, Signal } from '@angular/core';
import { breadcrumbsCode } from '../constants/code-snippets.constants';
import { CodeSnippet } from '../example-display/example-display.component';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  get breadcrumbCodeSnippet(): Signal<CodeSnippet[]> {
    return this._breadcrumbCodeSnippet.asReadonly();
  }

  private _breadcrumbCodeSnippet = signal<CodeSnippet[]>(breadcrumbsCode);

  setBreadcrumbCodeSnippet(code: CodeSnippet[]): void {
    this._breadcrumbCodeSnippet.set(code);
  }
}
