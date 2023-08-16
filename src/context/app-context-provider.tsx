import { ReactNode } from 'react';
import { useCharacters } from '../hooks/use.characters';
import { WebContext, WebContextStructure } from './app-context';

type Props = {
  children: ReactNode;
};

export function WebContextProvider({ children }: Props) {
  const context: WebContextStructure = {
    charactersContext: useCharacters(),
  };
  return <WebContext.Provider value={context}>{children}</WebContext.Provider>;
}
