export const environment = {
  production: false,
  useMock: false, // true → use LocalStorageService, false → use S3StorageService
  apiBaseUrl: 'http://localhost:4200/api',
  s3BucketUrl: 'https://dev-bucket.example.com',
};
