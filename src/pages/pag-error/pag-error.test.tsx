import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PagError from './pag-error';

describe('Given the componet PageError', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <PagError></PagError>
      </MemoryRouter>
    );
    const link = screen.getByRole('link');
    test('the component should be in the document', () => {
      expect(link).toBeInTheDocument();
    });
  });
});
