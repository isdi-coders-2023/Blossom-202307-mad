import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Card } from '../card/card';
import { Characters } from './charaters';

jest.mock('../card/card');

describe('Given the component Characters', () => {
  describe('When we render it', () => {
    const mock = {
      charactersContext: {
        characters: [1],
        loadCharacters: jest.fn(),
      },
    } as unknown as WebContextStructure;
    beforeEach(() => {
      render(
        <WebContext.Provider value={mock}>
          <Characters></Characters>
        </WebContext.Provider>
      );
    });

    test('The component should be in the document', () => {
      const element = screen.getAllByRole('list');
      expect(element[0]).toBeInTheDocument();
      expect(Card).toHaveBeenCalled();
    });

    test('The function has been called', async () => {
      const buttons = screen.getAllByRole('button');
      await fireEvent.click(buttons[0]);
      await fireEvent.click(buttons[1]);

      expect(mock.charactersContext.loadCharacters).toHaveBeenCalled();
    });
  });
});
