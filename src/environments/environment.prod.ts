import { AppConfig } from "../app/app-config";

export const environment: AppConfig = {
  production: true,
  useMock: false, // prod points to S3 by default
  apiBaseUrl: 'https://api.example.com',
  s3BucketUrl: 'https://prod-bucket.example.com',
  enableFlagToggles: false,
};
