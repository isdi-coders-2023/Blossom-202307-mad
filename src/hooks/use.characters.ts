import { useCallback, useEffect, useMemo, useReducer } from 'react';
import { ApiSimpsonsRepository } from '../components/api-repository/api-characters-repository';
import { loadCharacterActionCreator } from '../reducers/characters-action-creator';
import { simpsonReducer } from '../reducers/characters-reducer';

const initialState = {
  character: [],
  genderFilter: '',
};

export function useCharacters() {
  const [characters, dispatch] = useReducer(simpsonReducer, initialState);

  const baseUrl = 'https://apisimpsons.fly.dev/api/personajes?limit=15&page=';

  const repo = useMemo(() => new ApiSimpsonsRepository(baseUrl), []);

  let counter: number = 1;

  const loadCharacters = useCallback(
    async (page: number) => {
      try {
        if (counter === 1 && page === -1) {
          const characters = await (await repo).getAll(counter);
          dispatch(loadCharacterActionCreator(characters));
        } else {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          counter = counter + page;
          const characters = await (await repo).getAll(counter);
          dispatch(loadCharacterActionCreator(characters));
        }
      } catch (error) {
        console.error((error as Error).message);
      }
      return counter;
    },
    [repo]
  );

  const filterByGender = useCallback((gender: string) => {
    dispatch({ type: 'genderFilter', payload: gender });
  }, []);

  const filteredCharacters = useMemo(() => {
    if (characters.genderFilter) {
      return characters.character.filter(
        (character) => character.gender === characters.genderFilter
      );
    } else {
      return characters.character;
    }
  }, [characters.genderFilter, characters.character]);

  useEffect(() => {
    if (characters.genderFilter) {
      dispatch(loadCharacterActionCreator(filteredCharacters));
    } else {
      loadCharacters(0);
    }
  }, [loadCharacters]);

  return {
    characters: filteredCharacters,
    loadCharacters,
    filterByGender,
  };
}
