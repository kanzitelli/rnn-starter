import { hydrateMobX } from './helpMethods';

export class HydratedStore implements IHydratedStore {
  STORAGE_ID: string = '';
  hydrate = async () => this.STORAGE_ID && await hydrateMobX(this.STORAGE_ID, this);

  constructor(storageId: string) {
    this.STORAGE_ID = storageId;
  }
}