import { Component, Inject } from '@angular/core';
import { DOCUMENT_STORAGE } from '../../shared/models/document-storage';
import { DocumentStorage } from '../../shared/models/document-storage';
import { injectionTokenCodeSnippets } from '../../shared/constants/code-snippets.constants';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-injection-tokens',
  templateUrl: './injection-tokens.component.html',
  styleUrl: './injection-tokens.component.scss',
})
export class InjectionTokensComponent {
  protected injectionTokenCodeSnippets = injectionTokenCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Concept: ',
        description: 'Provide one interface, multiple implementations. The factory picks one based on environment.useMock.'
      },
      {
        label: 'Use case: ',
        description: 'The `DOCUMENT_STORAGE` token is used to inject the appropriate storage service based on the environment. In development, we use the `LocalStorageService` for easier debugging. In production, we use the `S3StorageService`.',
      },
    ],
  };

  protected text = '';
  protected msg = '';

  constructor(
    @Inject(DOCUMENT_STORAGE) private storage: DocumentStorage,
    private snackBar: MatSnackBar
  ) {}

  protected async save(): Promise<void> {
    const id = await this.storage.save(this.text);
    const implName = id.startsWith('s3-')
      ? 'S3StorageService'
      : 'LocalStorageService';
    this.msg = `Saved with ${implName}. id=${id}`;
    this.snackBar.open(this.msg, 'OK', { duration: 2500 });
  }
}
