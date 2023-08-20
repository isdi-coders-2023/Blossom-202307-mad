import { Character } from '../model/character';
import {
  CharacterAction,
  filterCharacterActionCreator,
  loadCharacterActionCreator,
} from './characters-action-creator'; // Assuming you have a loadCharacters action creator
import { actionTypeNames } from './characters-action-names';
import { CharactersState, simpsonReducer } from './characters-reducer';

describe('Given the function simpsonReducer', () => {
  describe('When we call the load action', () => {
    const mockInitialState = {
      character: [],
      genderFilter: '',
    };

    const mockedAction = loadCharacterActionCreator([]);
    const finalState: CharactersState = {
      character: [],
      genderFilter: '',
    };

    test('Then it should handle the load action correctly', () => {
      const newState = simpsonReducer(mockInitialState, mockedAction);
      expect(newState).toEqual(finalState);
    });
  });

  describe('When we call the filter action', () => {
    const mockInitialState = {
      character: [],
      genderFilter: 'genderFilter',
    };

    const mockedAction = {
      type: 'genderFilter',
      payload: 'newGenderFilter',
    } as CharacterAction;
    const finalState: CharactersState = {
      character: [],
      genderFilter: 'newGenderFilter',
    };

    test('Then it should handle the filter action correctly', () => {
      const newState = simpsonReducer(mockInitialState, mockedAction);
      expect(newState).toEqual(finalState);
    });
  });

  describe('When we call no action', () => {
    const mockInitialState: CharactersState = {
      character: [],
      genderFilter: 'genderFilter',
    };

    const mockedAction = {
      type: 'typeTest',
      payload: 'genderFilter',
    } as CharacterAction;

    test('Then it should handle the default action correctly', () => {
      const newState = simpsonReducer(mockInitialState, mockedAction);
      expect(newState).toEqual(mockInitialState);
    });
  });
  describe('when filterCharacterActionCreator is called', () => {
    test('Then its created the correct action for filtering', () => {
      const mockData = [] as Character[];
      const mockAction = filterCharacterActionCreator(mockData);

      expect(mockAction.type).toBe(actionTypeNames.genderFilter);
      expect(mockAction.payload).toEqual(mockData);
    });
  });
});
