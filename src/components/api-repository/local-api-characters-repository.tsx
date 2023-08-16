import { Character, CharacterIncoming } from '../../model/character';
import { Repository } from './repository';

export class LocalApiSimpsonsRepository implements Repository<Character> {
  localUrl: string;
  constructor(localUrl: string) {
    this.localUrl = localUrl;
  }

  private mapLocalData(data: CharacterIncoming): Character {
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

  async getTotal(): Promise<Character[]> {
    const request = await fetch(this.localUrl);
    if (!request.ok) {
      throw new Error(
        `Error ${request.status}: ${request.statusText}. Try again.`
      );
    }
    const data = await request.json();
    return data.forEach((item: CharacterIncoming) => this.mapLocalData(item));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(_item: Character) {
    const request = await fetch(this.localUrl, {
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
    return this.mapLocalData(data);
  }
  async update(_id: string, item: Partial<Character>): Promise<Character> {
    const url = this.localUrl + '/' + _id;
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
    return this.mapLocalData(data);
  }

  async delete(_id: string): Promise<void> {
    const url = this.localUrl + '/' + _id; //aquí no sé cómo coger el elemento para borrarlo, ya que no tiene un id específico
    const request = await fetch(url, {
      method: 'DELETE',
    });

    if (!request.ok)
      throw new Error(`Error ${request.status}: ${request.statusText}`);
  }
}
