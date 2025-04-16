import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';
import { CodeSnippet } from '../../shared/example-display/example-display.component';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-breadcrumbs-host',
  templateUrl: './breadcrumbs-host.component.html',
  styleUrl: './breadcrumbs-host.component.scss',
})
export class BreadcrumbsHostComponent {
  get breadcrumbsCode(): CodeSnippet[] {
    return this.breadcrumbsService.breadcrumbCodeSnippet();
  }

  exampleInfo: InfoItem = {
    context:
      'This example shows how to implement breadcrumbs in an Angular application. The breadcrumbs are dynamically generated based on the current route.',
  };

  constructor(
    private breadcrumbsService: BreadcrumbsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.breadcrumbsService.setBreadcrumbCodeSnippet(this.breadcrumbsCode);
  }
}
