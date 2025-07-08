import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { HighlightJsModule } from 'ngx-highlight-js';
import { AuthControlsComponent } from './auth-controls/auth-controls.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ExampleDisplayComponent } from './example-display/example-display.component';
import { ExampleInfoComponent } from './example-info/example-info.component';
import { ProsConsTableComponent } from './pros-cons-table/pros-cons-table.component';
import { UnsavedChangesModalComponent } from './unsave-changes-modal/unsave-changes-modal.component';
import { UserCardComponent } from './user-card/user-card.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDividerModule } from '@angular/material/divider';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { UnslugPipe } from './pipes/unslug.pipe';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { StatusClassPipe } from './pipes/status-class.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  declarations: [
    ExampleDisplayComponent,
    UnsavedChangesModalComponent,
    AuthControlsComponent,
    BreadcrumbsComponent,
    ExampleInfoComponent,
    ProsConsTableComponent,
    UserCardComponent,
    AddUserComponent,
    NotificationBannerComponent,
    UnslugPipe,
    PluralizePipe,
    StatusClassPipe,
    TooltipDirective,
  ],
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
    MatTableModule,
    MatChipsModule,
    LayoutModule,
    RouterModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
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
    MatTableModule,
    MatSelectModule,
    FormsModule,
    LayoutModule,
    RouterModule,
    MatDividerModule,
    MatChipsModule,
    ExampleDisplayComponent,
    ExampleInfoComponent,
    UnsavedChangesModalComponent,
    AuthControlsComponent,
    BreadcrumbsComponent,
    ProsConsTableComponent,
    UserCardComponent,
    AddUserComponent,
    NotificationBannerComponent,
    UnslugPipe,
    PluralizePipe,
    StatusClassPipe,
    TooltipDirective,
  ],
  providers: [provideHttpClient()],
})
export class SharedModule {}
