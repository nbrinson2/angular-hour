import { InjectionToken } from '@angular/core';

export interface AppConfig {
  production: boolean;
  apiBaseUrl: string;
  s3BucketUrl: string;
  useMock: boolean;
  enableFlagToggles: boolean; // only respected in non prod
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');
