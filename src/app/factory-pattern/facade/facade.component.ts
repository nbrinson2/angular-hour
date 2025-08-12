import { Component } from '@angular/core';
import { StorageFacade, StorageKind } from '../../shared/utils/storage-registry';
import { facadeCodeSnippets } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrl: './facade.component.scss'
})
export class FacadeComponent {
  protected facadeCodeSnippets = facadeCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'One service interace (DocumentStorage) ',
        description: 'that can have multiple implementations (LocalStorageService, S3StorageService)'
      },
      {
        label: 'A facade (StorageFacade) ',
        description: 'that can be used to switch between implementations at runtime'
      },
    ]
  };
  protected benefitsInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Loose coupling',
        description: 'UI never directly imports LocalStorageService or S3StorageService.',
      },
      {
        label: 'Swap implementations easily',
        description: 'Add AzureBlobStorageService without touching components.',
      },
      {
        label: 'Centralized logic',
        description: 'Runtime selection is handled in one place, not spread across the app.',
      },
      {
        label: 'Testability',
        description: 'In unit tests, you can replace the facade with a mock without worrying about multiple backends.',
      },
    ],
  };

  protected text = '';
  protected msg = '';
  protected kind: StorageKind = 'local';

  constructor(private facade: StorageFacade, private snackBar: MatSnackBar) {}

  setKind(k: StorageKind): void {
    this.kind = k;
    this.facade.setByKind(k);
  }

  protected async save(): Promise<void> {
    const id = await this.facade.save(this.text);
    const implName = this.kind === 's3' ? 'S3StorageService' : 'LocalStorageService';
    this.msg = `Saved with ${implName}. id=${id}`;
    this.snackBar.open(this.msg, 'OK', { duration: 2500 });
  }
}
