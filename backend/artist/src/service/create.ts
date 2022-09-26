import { Artist } from '../model/artist';
import { Resource } from '../model/resource';
import { CreateRepository } from '../repository/create';
import { injectable } from 'tsyringe';
import { ApiError } from '../errors';

export class InvalidArtistError extends ApiError {
  constructor(message: string) {
    super(400, message);
  }
}

@injectable()
export class CreateService {
  constructor(private readonly createRepository: CreateRepository) {}
  async execute(artist: Artist): Promise<Resource<Artist>> {
    if (!artist.name) {
      throw new InvalidArtistError('Missing mandatory field name');
    }
    return await this.createRepository.create(artist);
  }
}
