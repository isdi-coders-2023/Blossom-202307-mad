import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WebContext, WebContextStructure } from '../../context/app-context';
import { Character } from '../../model/character';
import { Detail } from './detail';

const characterMock = [
  {
    id: 'string',
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
        characters: characterMock,
      },
    } as unknown as WebContextStructure;

    render(
      <WebContext.Provider value={characterTest}>
        <Detail />
      </WebContext.Provider>
    );
    test('the component should be in the document', async () => {
      const element = await screen.getByRole('image');
      expect(element).toBeInTheDocument();
    });
  });
});
