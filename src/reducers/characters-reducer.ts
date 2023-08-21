import { Character } from '../model/character';
import { CharacterAction } from './characters-action-creator';
import { actionTypeNames } from './characters-action-names';

export type CharactersState = {
  character: Character[];
  genderFilter: string;
};

export function simpsonReducer(
  state: CharactersState,
  action: CharacterAction
): CharactersState {
  switch (action.type) {
    case actionTypeNames.load:
      return { ...state, character: action.payload as Character[] };
    case 'genderFilter':
      return { ...state, genderFilter: action.payload as string };
    default:
      return state;
  }
}
