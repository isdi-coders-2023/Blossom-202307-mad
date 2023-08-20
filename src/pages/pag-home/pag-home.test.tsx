import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from '../../components/home/home';

describe('Given the component Home', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <Home></Home>
      </MemoryRouter>
    );

    test('the component should be in the document', () => {
      const home = screen.getByRole('heading');
      expect(home).toBeInTheDocument();
    });
  });
});
