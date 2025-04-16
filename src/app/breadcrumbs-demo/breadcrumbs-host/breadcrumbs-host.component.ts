import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';
import { CodeSnippet } from '../../shared/example-display/example-display.component';

@Component({
  selector: 'app-breadcrumbs-host',
  templateUrl: './breadcrumbs-host.component.html',
  styleUrl: './breadcrumbs-host.component.scss',
})
export class BreadcrumbsHostComponent {
  get breadcrumbsCode(): CodeSnippet[] {
    return this.breadcrumbsService.breadcrumbCodeSnippet();
  }

  constructor(private breadcrumbsService: BreadcrumbsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breadcrumbsService.setBreadcrumbCodeSnippet(this.breadcrumbsCode);
  }
}
