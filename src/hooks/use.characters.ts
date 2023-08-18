import { useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsonsRepository } from '../components/api-repository/api-characters-repository';
import { loadCharacterActionCreator } from '../reducers/characters-action-creator';
import { simpsonReducer } from '../reducers/characters-reducer';

const ApiURL = 'https://apisimpsons.fly.dev/api/personajes?limit=5&page=';

const counter = 0;

export function useCharacters() {
  const repo = useMemo(() => new ApiSimpsonsRepository(ApiURL, counter), []);
  const [characters, dispatch] = useReducer(simpsonReducer, []);

  const loadCharacters = useCallback(async () => {
    try {
      const characters = await repo.getAll();
      dispatch(loadCharacterActionCreator(characters));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [repo]);

  return {
    characters,
    loadCharacters,
  };
}
