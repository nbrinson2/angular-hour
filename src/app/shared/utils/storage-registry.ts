import { Inject, Injectable, InjectionToken, Injector } from "@angular/core";
import { DocumentStorage } from "../models/document-storage";

export type StorageKind = 'local' | 's3';

export interface StorageFactory {
  kind: StorageKind;
  create(injector: Injector): DocumentStorage;
}

export const STORAGE_FACTORIES = new InjectionToken<StorageFactory[]>('STORAGE_FACTORIES');

@Injectable({ providedIn: 'root' })
export class StorageFacade implements DocumentStorage {
  private active: DocumentStorage;

  constructor(
    @Inject(STORAGE_FACTORIES) factories: StorageFactory[],
    private injector: Injector
  ) {
    const byKind = new Map<StorageKind, StorageFactory>(
      factories.map(f => [f.kind, f] as const)
    );
    this.active = byKind.get('local')!.create(this.injector);

    this._setByKind = (k: StorageKind) => {
      const factory = byKind.get(k);
      if (!factory) throw new Error(`No factory for ${k}`);
      this.active = factory.create(this.injector);
    };
  }

  private _setByKind: (k: StorageKind) => void;

  setByKind(kind: StorageKind): void {
    this._setByKind(kind);
  }

  save(doc: string): Promise<string> {
    return this.active.save(doc);
  }
}
