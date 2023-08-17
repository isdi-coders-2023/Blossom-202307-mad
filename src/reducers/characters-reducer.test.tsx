import {
  CharacterAction,
  loadCharacterActionCreator,
} from './characters-action-creator'; // Assuming you have a loadCharacters action creator
import { CharactersState, simpsonReducer } from './characters-reducer';

describe('Given the function simpsonReducer', () => {
  describe('When we call the load action', () => {
    const mockInitialState: CharactersState = [];

    const mockedAction = loadCharacterActionCreator([]);
    const finalState: CharactersState = [];

    test('Then it should handle the load action correctly', () => {
      const newState = simpsonReducer(mockInitialState, mockedAction);
      expect(newState).toEqual(finalState);
    });
  });

  describe('When we call no action', () => {
    const mockInitialState: CharactersState = [];

    const mockedAction = {
      type: 'lkjasdjlksaljksd',
      payload: 'adsassa',
    } as CharacterAction;

    test('Then it should handle the default action correctly', () => {
      const newState = simpsonReducer(mockInitialState, mockedAction);
      expect(newState).toEqual(newState);
    });
  });
});
