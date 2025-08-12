import { Injectable } from "@angular/core";
import { DocumentStorage } from "../models/document-storage";

@Injectable({ providedIn: 'root' })
export class S3StorageService implements DocumentStorage {
  async save(doc: string): Promise<string> {
    // pretend API call
    await new Promise(r => setTimeout(r, 150));
    return `s3-${Math.random().toString(36).slice(2)}`;
  }
}