import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Card } from '../card/card';
import { Characters } from './charaters';

jest.mock('../card/card');

describe('Given the component Characters', () => {
  describe('When we render it', () => {
    const m = {
      charactersContext: {
        characters: [1],
        loadCharacters: jest.fn(),
      },
    } as unknown as WebContextStructure;
    screen.debug;
    render(
      <WebContext.Provider value={m}>
        <Characters></Characters>
      </WebContext.Provider>
    );

    test('The component should be in the document', () => {
      const element = screen.getAllByRole('list');
      expect(element[0]).toBeInTheDocument();
      expect(Card).toHaveBeenCalled();
    });
  });
});
