import { Base } from 'deta';
import { Database } from './database';

export class DetaDatabase implements Database {
  private db;
  constructor() {
    this.db = Base('artist');
  }

  async put(data: any): Promise<any> {
    return await this.db.put(data);
  }
}
