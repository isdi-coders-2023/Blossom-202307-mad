export type ApiResponse = {
  docs: object[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number;
  page: number;
  pagingCounter: number;
  prevPage: number;
  totalDocs: number;
  totalPages: number;
};

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
