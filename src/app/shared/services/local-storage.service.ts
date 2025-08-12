import { Injectable } from "@angular/core";
import { DocumentStorage } from "../models/document-storage";

@Injectable({ providedIn: 'root' })
export class LocalStorageService implements DocumentStorage {
  async save(doc: string): Promise<string> {
    const id = crypto.randomUUID();
    localStorage.setItem(`doc:${id}`, doc);
    return id;
  }
}