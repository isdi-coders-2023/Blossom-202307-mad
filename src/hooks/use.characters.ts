import { useCallback, useMemo, useReducer } from 'react';
import { ApiSimpsonsRepository } from '../components/api-repository/api-characters-repository';
import { loadCharacterActionCreator } from '../reducers/characters-action-creator';
import { simpsonReducer } from '../reducers/characters-reducer';

export function useCharacters() {
  const [characters, dispatch] = useReducer(simpsonReducer, []);

  const baseUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=5&page=';

  const repo = useMemo(() => new ApiSimpsonsRepository(baseUrl), []);

  let counter: number = 1;

  const loadCharacters = useCallback(
    async (page: number) => {
      try {
        counter = counter + page;
        console.log(counter);
        console.log(`${baseUrl}${counter}`);

        const characters = await (await repo).getAll(counter);

        console.log(characters);
        dispatch(loadCharacterActionCreator(characters));
      } catch (error) {
        console.error((error as Error).message);
      }

      console.log(counter);
      return counter;
    },
    [repo]
  );

  return {
    characters,
    loadCharacters,
  };
}
