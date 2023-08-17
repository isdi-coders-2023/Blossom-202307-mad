import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRouter } from './app.routes';

describe('Given the app routes component', () => {
  describe('When we render error Router', () => {
    const mockedPagError = jest.fn().mockReturnValue(<span>¡ HORROR !</span>);
    jest.mock('../../pages/pag-error/pag-error', () => mockedPagError);
    //'../pag-error/pag-error'

    let element: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/*']} initialIndex={0}>
            <AppRouter></AppRouter>
          </Router>
        );
      });

      element = screen.getByText(/horror/i);
    });

    test('Then it should be in the document', () => {
      expect(mockedPagError).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
