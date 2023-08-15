import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import PagError from '../../pages/error.pages/pag-error';
import { AppRouter } from './app.routes';

describe('Given the app routes component', () => {
  describe('When we render error Router', () => {
    const mockedPagError = jest.fn().mockReturnValue(<span>/¡ HORROR !/</span>);
    jest.mock('../../pages/error.pages/pag-error', () => PagError);
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

      element = screen.getByText('¡ HORROR !');
    });

    test('Then it should be in the document', () => {
      expect(mockedPagError).toHaveBeenCalled();
      expect(element).toBeInTheDocument();
    });
  });
});
