import { InjectionToken } from '@angular/core';

export interface DocumentStorage {
  save(doc: string): Promise<string>;
}

export const DOCUMENT_STORAGE = new InjectionToken<DocumentStorage>(
  'DOCUMENT_STORAGE'
);
