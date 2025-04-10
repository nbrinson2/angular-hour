import { NgModule } from '@angular/core';
import { ExampleDisplayComponent } from './example-display/example-display.component';
import { UnsavedChangesModalComponent } from './unsave-changes-modal/unsave-changes-modal.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AuthControlsComponent } from './auth-controls/auth-controls.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExampleDisplayComponent, UnsavedChangesModalComponent, AuthControlsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    HighlightJsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    HighlightJsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    ExampleDisplayComponent,
    UnsavedChangesModalComponent,
    AuthControlsComponent,
  ],
})
export class SharedModule {}
