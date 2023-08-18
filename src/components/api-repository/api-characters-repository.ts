import { Character, CharacterIncoming } from '../../model/character';
import { SimpleRepository } from './repository';

export class ApiSimpsonsRepository implements SimpleRepository<Character> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  private mapData(data: CharacterIncoming): Character {
    return {
      gender: data.Genero,
      history: data.Historia,
      image: data.Imagen,
      name: data.Nombre,
      job: data.Ocupacion,
      updatedAt: data.updatedAt,
      state: data.Estado,
      id: data._id,
    } as Character;
  }

  async getAll(page: number): Promise<Character[]> {
    const request = await fetch(`${this.urlBase}${page}`);
    if (!request.ok) {
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    }
    const data = await request.json();
    const dataCharacters = data.docs;
    const newDataCharacters: Character[] = dataCharacters.map(
      (item: CharacterIncoming) => this.mapData(item)
    );

    return newDataCharacters;
  }
}
