// src/app/components/cache-interceptor/cache-interceptor.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CacheService } from '../../shared/services/cache.service';
import { cacheInterceptorCodeSnippets } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-cache-interceptor',
  templateUrl: './cache-interceptor.component.html',
  styleUrls: ['./cache-interceptor.component.scss'],
})
export class CacheInterceptorComponent {
  protected cacheInterceptorCodeSnippets = cacheInterceptorCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'First loadPosts()',
        description: 'Interceptor lets request through, caches HttpResponse.'
      },
      {
        label: 'Second loadPosts()',
        description: 'Interceptor finds cache and returns instantly.'
      },
      {
        label: 'clearCache()',
        description: 'Allows you to purge everything when you need fresh data.'
      }
    ]
  };
  
  protected posts$!: Observable<Post[]>;
  protected loading = false;

  constructor(
    private http: HttpClient,
    private cacheService: CacheService
  ) {}

  loadPosts(): void {
    this.loading = true;
    this.posts$ = this.http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.posts$.subscribe(() => (this.loading = false));
  }

  protected clearCache(): void {
    console.log('Clearing cache: ', this.cacheService.getCacheList());
    this.cacheService.clear();
    console.log('Cleared cache: ', this.cacheService.getCacheList());
  }
}
