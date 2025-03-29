import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';
import { searchExampleCode } from '../../shared/constants/code-snippets.constants';

@Component({
  selector: 'app-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.scss']
})
export class SearchExampleComponent implements OnInit {

  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  searchResults: string[] = [];
  searchExampleCode = searchExampleCode;

  constructor(private searchService: SearchService) { }

    ngOnInit(): void {
      fromEvent(this.searchInput.nativeElement, 'input').pipe(
        debounceTime(600),
        distinctUntilChanged(),
        switchMap((event: any) => this.searchService.search(event.target.value))
      ).subscribe(results => {
        this.searchResults = results;
      });
    }
}