import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WebContext, WebContextStructure } from '../../context/app-context';
import PagCharacters from './pag-characters';

describe('Given the component PagCharacters', () => {
  describe('When we render it', () => {
    const mock = {
      charactersContext: {
        characters: [1],
        loadCharacters: jest.fn(),
      },
    } as unknown as WebContextStructure;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <WebContext.Provider value={mock}>
            <PagCharacters></PagCharacters>
          </WebContext.Provider>
        </MemoryRouter>
      );
    });
    test('the component should be in the document', async () => {
      const buttons = screen.getAllByRole('button');
      await fireEvent.click(buttons[0]);

      expect(mock.charactersContext.loadCharacters).toHaveBeenCalled();
    });
  });
});
