// src/app/interceptors/cache.interceptor.ts
import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

export const CacheInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>, 
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const cacheService = inject(CacheService);
  
  // Only cache GET requests
  if (req.method !== 'GET') {
    return next(req);
  }

  console.log(`🔍 Cache Interceptor: Checking cache for ${req.urlWithParams}`);
  
  const cachedResponse = cacheService.get(req.urlWithParams) as HttpResponse<unknown> | null;
  if (cachedResponse) {
    console.log(`✅ Cache Interceptor: Returning cached response for ${req.urlWithParams}`);
    // Return a cloned response of the correct type
    return of(cachedResponse.clone());
  }

  console.log(`❌ Cache Interceptor: No cache found, making HTTP request for ${req.urlWithParams}`);

  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log(`💾 Cache Interceptor: Caching response for ${req.urlWithParams}`);
        // Cache the response (typed)
        cacheService.put(req.urlWithParams, event.clone());
      }
    })
  );
};
