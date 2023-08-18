import { Character } from '../model/character';
import { CharacterAction } from './characters-action-creator';
import { actionTypeNames } from './characters-action-names';

export type CharactersState = Character[];

export function simpsonReducer(
  state: CharactersState,
  action: CharacterAction
): CharactersState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Character[];
    default:
      return { ...state };
  }
}
