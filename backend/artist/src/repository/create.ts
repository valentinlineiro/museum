import { Artist } from '../model/artist';
import { Resource } from '../model/resource';
import { v4 as uuid } from 'uuid';
import { Base, Deta } from 'deta';
import { Database } from '../config/database/database';

export class CreateRepository {
  constructor(private readonly database: Database) {}

  async create(artist: Artist): Promise<Resource<Artist>> {
    const createdArtist = await this.database.put({
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
