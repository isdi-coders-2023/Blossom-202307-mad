import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('Given the component Card', () => {
  describe('When we render it', () => {
    const newTestCharacter = {
      state: 'string',
      gender: 'string',
      history: 'string',
      image: 'string',
      name: 'string',
      job: 'string',
      updatedAt: 'string',
      id: 'string',
    };
    render(<Card character={newTestCharacter}></Card>);
    test('The component should be in the document', () => {
      const element = screen.getAllByRole('listitem');
      expect(element[0]).toBeInTheDocument();
    });
  });
});
