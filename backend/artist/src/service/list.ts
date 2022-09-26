import { injectable } from 'tsyringe';
import { Artist } from '../model/artist';
import { Page } from '../model/page';

@injectable()
export class ListService {
  constructor() {}
  async execute(): Promise<Page<Artist>> {
    return {
      items: [],
      count: 0,
    };
  }
}
