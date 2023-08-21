import { Character } from '../model/character';
import { actionTypeNames } from './characters-action-names';

export type CharacterAction = {
  type: string;
  payload: Character[] | Character | string;
};
export const loadCharacterActionCreator = (
  data: Character[]
): CharacterAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const filterCharacterActionCreator = (
  data: Character[]
): CharacterAction => {
  return {
    type: actionTypeNames.genderFilter,
    payload: data,
  };
};
