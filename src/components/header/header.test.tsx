import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header';

describe('Given the component Footer', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <Header></Header>
      </MemoryRouter>
    );
    test('the component should be in the document', () => {
      const element = screen.getByRole('banner');
      expect(element).toBeInTheDocument();
    });
  });
});
