export type CharacterNoId = {
  Estado: boolean;
  Genero: string;
  Historia: string;
  Imagen: string;
  Nombre: string;
  Ocupacion: string;
  updatedAt: string;
  id: string;
};

export type idCharacter = {
  id: string;
};

export type Character = CharacterNoId & idCharacter;
