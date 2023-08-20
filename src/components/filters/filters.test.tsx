import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Filters } from './filters';

describe('Given Home component', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      const filter = jest.fn();
      const mock = {
        charactersContext: {
          characters: [{}],
          loadCharacters: filter,
          filterByGender: jest.fn(),
        },
      } as unknown as WebContextStructure;
      render(
        <WebContext.Provider value={mock}>
          <Filters></Filters>
        </WebContext.Provider>
      );
    });
    test('the component should be in the document', async () => {
      const options = screen.getAllByRole('option');
      expect(options[0]).toBeInTheDocument();
      const select = screen.getAllByRole('combobox');
      await fireEvent.change(select[0]);
    });
  });
});
