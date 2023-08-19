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
  // Add useCallback to function because the state actualices inside calls setStateuseEffect
  //el problema es que no funciona... falta useMemo, pero ¿dónde y cómo?
  useEffect(() => {
    if (characters.genderFilter) {
      const filteredCharacters = characters.character.filter(
        (character) => character.gender === characters.genderFilter
      );
      dispatch(loadCharacterActionCreator(filteredCharacters));
    } else {
      loadCharacters(0);
    }
  }, [characters.genderFilter, characters, loadCharacters]);

  return {
    characters: characters.character,
    loadCharacters,
    filterByGender,
  };
}
