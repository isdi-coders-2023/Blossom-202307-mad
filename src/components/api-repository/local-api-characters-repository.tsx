import { Character, CharacterIncoming } from '../../model/character';
import { Repository } from './repository';

export class LocalApiSimpsonsRepository implements Repository<Character> {
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

  async getAll(): Promise<Character[]> {
    const request = await fetch(this.urlBase);
    if (!request.ok) {
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    }
    const data = await request.json();
    return data.forEach((item: CharacterIncoming) => this.mapData(item));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(_item: Character) {
    const request = await fetch(this.urlBase, {
      method: 'POST',
      body: 'JSON.stringify',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!request.ok)
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    const data = await request.json();
    return this.mapData(data);
  }
  async update(_id: string, item: Partial<Character>): Promise<Character> {
    const url = this.urlBase + '/' + _id;
    const request = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!request.ok)
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    const data = await request.json();
    return this.mapData(data);
  }

  async delete(_id: string): Promise<void> {
    const url = this.urlBase + '/' + _id; //aquí no sé cómo coger el elemento para borrarlo, ya que no tiene un id específico
    const request = await fetch(url, {
      method: 'DELETE',
    });

    if (!request.ok)
      throw new Error(`Error ${request.status}: ${request.statusText}`);
  }
}
