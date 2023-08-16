import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PagError from './pag-error';

describe('Given the componet PageError', () => {
  describe('When we render it', () => {
    render(<PagError></PagError>);
    test('the componente should be in the document', () => {
      const element = screen.getByRole('img');
      expect(element).toBeInTheDocument();
    });
  });
});
