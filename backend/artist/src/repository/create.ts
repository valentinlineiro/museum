import { Artist } from '../model/artist';
import { Resource } from '../model/resource';
import { injectable, inject } from 'tsyringe';
import { v4 as uuid } from 'uuid';
import { Base, Deta } from 'deta';

@injectable()
export class CreateRepository {
  private db;

  constructor() {
    if (process.env.PROJECT_KEY && process.env.TEST_DB_NAME) {
      const deta = Deta(process.env.PROJECT_KEY);
      this.db = deta.Base(process.env.TEST_DB_NAME);
    } else {
      this.db = Base('artist');
    }
  }

  async create(artist: Artist): Promise<Resource<Artist>> {
    const createdArtist = await this.db.put({
      key: uuid(),
      name: artist.name,
      bio: artist.bio,
      tags: artist.tags || [],
      created: Date.now(),
    });
    return {
      id: createdArtist.key,
      created: createdArtist.created,
      resource: {
        name: createdArtist.name,
        bio: createdArtist.bio,
        tags: createdArtist.tags,
      },
    } as Resource<Artist>;
  }
}
