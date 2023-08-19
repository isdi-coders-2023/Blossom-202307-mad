import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Detail } from './detail';

describe('Given the component Detail', () => {
  describe('When we use params it will get the id from chracters', () => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useParams: () => ({
        id: 'sad',
      }),
      useRouteMatch: () => ({ url: '/detail/:sad' }),
    }));
  });
  describe('When we render it', () => {
    const characterTest = {
      charactersContext: {
        name: 'asd',
        history: 'asdasf',
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
      const element = screen.getAllByRole('div');
      expect(element).toBeInTheDocument();
    });
  });
});
