import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UnsavedChangesModalComponent } from '../unsave-changes-modal/unsave-changes-modal.component';
import { CanComponentDeactivate } from './can-deactivate.guard';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
    if (component.canDeactivate()) {
      return true;
    }

    const dialogRef = this.dialog.open(UnsavedChangesModalComponent, {
      width: '400px',
      disableClose: true
    });

    return dialogRef.afterClosed(); // Returns Observable<boolean>
  }
}
