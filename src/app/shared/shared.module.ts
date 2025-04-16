import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AuthControlsComponent } from './auth-controls/auth-controls.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ExampleDisplayComponent } from './example-display/example-display.component';
import { ExampleInfoComponent } from './example-info/example-info.component';
import { UnsavedChangesModalComponent } from './unsave-changes-modal/unsave-changes-modal.component';

@NgModule({
  declarations: [ExampleDisplayComponent, UnsavedChangesModalComponent, AuthControlsComponent, BreadcrumbsComponent, ExampleInfoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HighlightJsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    HighlightJsModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    LayoutModule,
    RouterModule,
    ExampleDisplayComponent,
    ExampleInfoComponent,
    UnsavedChangesModalComponent,
    AuthControlsComponent,
    BreadcrumbsComponent,
  ],
  providers: [
    provideHttpClient(),
  ],
})
export class SharedModule {}
