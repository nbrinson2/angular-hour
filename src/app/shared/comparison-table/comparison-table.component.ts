import { Component, Input } from '@angular/core';

export interface ComparisonTableColumn {
  key: string;
  header: string;
  icon?: string; // optional: to prefix icons like ✅ ❌
}

export interface ComparisonTableRow {
  [key: string]: string; // key matches column key
}

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})
export class ComparisonTableComponent {
  @Input() columns: ComparisonTableColumn[] = [];
  @Input() rows: ComparisonTableRow[] = [];

  get displayedColumns(): string[] {
    return this.columns.map(col => col.key);
  }
}
