import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the component Header', () => {
  describe('When we render it', () => {
    render(<Header></Header>);
    test('The component should be in the document', () => {
      const element = screen.getAllByRole('heading');
      expect(element[0]).toBeInTheDocument();
    });
  });
});
