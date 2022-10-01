import { Database } from './database';

export class MockDatabase implements Database {
  async put(data: any): Promise<any> {
    return await Promise.resolve(data);
  }
}
