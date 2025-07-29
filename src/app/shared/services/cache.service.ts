// src/app/services/cache.service.ts
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private cache = new Map<string, HttpResponse<unknown>>();

  getCacheList(): string[] {
    return Array.from(this.cache.keys());
  }

  /**
   * Retrieve a cached HttpResponse<T> by key.
   * Returns a cloned response of the correct type, or null if missing.
   */
  get<T>(key: string): HttpResponse<T> | null {
    const cached = this.cache.get(key);
    return cached
      ? (cached.clone() as HttpResponse<T>)
      : null;
  }

  /**
   * Cache an HttpResponse<T> under the given key.
   * We clone to avoid mutating the original.
   */
  put<T>(key: string, response: HttpResponse<T>): void {
    this.cache.set(key, response.clone() as HttpResponse<unknown>);
  }

  /**
   * Check presence of a key in the cache.
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Clear all cached entries.
   */
  clear(): void {
    this.cache.clear();
  }
}
