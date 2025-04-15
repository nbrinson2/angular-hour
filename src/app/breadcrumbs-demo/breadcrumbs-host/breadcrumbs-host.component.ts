import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../shared/services/breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs-host',
  templateUrl: './breadcrumbs-host.component.html',
  styleUrl: './breadcrumbs-host.component.scss',
})
export class BreadcrumbsHostComponent {
  get breadcrumbsCode(): string {
    return this.breadcrumbsService.breadcrumbCodeSnippet();
  }

  constructor(private breadcrumbsService: BreadcrumbsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.breadcrumbsService.setBreadcrumbCodeSnippet(this.breadcrumbsCode);
  }
}
