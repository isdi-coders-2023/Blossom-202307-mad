export type CharacterNoId = {
  state: string;
  gender: string;
  history: string;
  image: string;
  name: string;
  job: string;
  updatedAt: string;
};

export type CharacterIncoming = {
  Estado: string;
  Genero: string;
  Historia: string;
  Imagen: string;
  Nombre: string;
  Ocupacion: string;
  updatedAt: string;
  _id: string;
};

export type idCharacter = {
  id: string;
};

export type Character = CharacterNoId & idCharacter;
