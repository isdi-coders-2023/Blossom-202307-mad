import { createContext } from 'react';
import { useCharacters } from '../hooks/use.characters';

export type WebContextStructure = {
  charactersContext: ReturnType<typeof useCharacters>;
};

export const WebContext = createContext<WebContextStructure>(
  {} as WebContextStructure
);
