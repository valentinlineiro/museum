import { v4 as uuid } from 'uuid';
import { ApiError } from '../errors';
import { Artist } from '../model/artist';

export class InvalidArtistError extends ApiError {
  constructor(message: string) {
    super(400, message);
  }
}

export class CreateUseCase {
  execute(artist: Artist): Artist {
    if (!artist.name) {
      throw new InvalidArtistError('Missing mandatory field name');
    }
    const toCreate: Artist = { id: uuid(), ...artist, tags: artist.tags || [] };
    return toCreate;
  }
}
