import { Component, Input } from '@angular/core';

export interface ProsConsItem {
  pro: string;
  con: string;
}

@Component({
  selector: 'app-pros-cons-table',
  templateUrl: './pros-cons-table.component.html',
  styleUrl: './pros-cons-table.component.scss'
})
export class ProsConsTableComponent {
  @Input() items: ProsConsItem[] = [];

  @Input() leftHeader = 'Pros';
  @Input() rightHeader = 'Cons';

  displayedColumns: string[] = ['left', 'right'];
}
