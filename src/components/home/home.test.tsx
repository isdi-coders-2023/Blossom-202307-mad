import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { Home } from './home';

describe('Given Home component', () => {
  describe('When we render it', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Home></Home>
        </MemoryRouter>
      );
      button = screen.getByRole('button');
    });

    test('the component should be in the document', () => {
      expect(button).toBeInTheDocument();
    });
  });
});
