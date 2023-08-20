import { renderHook } from '@testing-library/react-hooks';
import { useCharacters } from './use.characters';

let useCharactersResult;
describe('Give  usecharacters Hook', () => {
  beforeEach(() => {
    useCharactersResult= renderHook(()=> useCharacters()));
  });
});
