import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Detail } from './detail';

describe('Given the component Deatil', () => {
  describe('When we render it', () => {
    const characterTest = {
      charactersContext: {
        characters: [0],
        image: 'test',
      },
    } as unknown as WebContextStructure;

    render(
      <WebContext.Provider value={characterTest}>
        <Detail></Detail>
      </WebContext.Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getAllByRole('listitem');
      expect(element).toBeInTheDocument();
    });
  });
});
