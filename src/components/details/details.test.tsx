import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Character } from '../../model/character';
import { Detail } from './detail';

const mockCharacters = [
  {
    id: '01',
    state: 'string',
    gender: 'string',
    history: 'string',
    image: 'string',
    name: 'string',
    job: 'string',
    updatedAt: 'string',
  },
] as Character[];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '01',
  }),
}));

describe('Given the component Detail', () => {
  describe('When we render it', () => {
    const characterTest = {
      charactersContext: {
        characters: mockCharacters,
      },
    } as unknown as WebContextStructure;

    render(
      <WebContext.Provider value={characterTest}>
        <Router>
          <Detail />
        </Router>
      </WebContext.Provider>
    );
    test('the component should be in the document', async () => {
      const element = await screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
