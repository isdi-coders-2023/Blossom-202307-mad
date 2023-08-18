import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRouter } from './app.routes';

describe('Given the app routes component', () => {
  describe('When we render error Router', () => {
    const mockedPagError = jest.fn().mockReturnValue(<span>ยก HORROR !</span>);
    jest.mock('../../pages/pag-error/pag-error', () => mockedPagError);

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
  describe('When we render home Router', () => {
    const mockedPagHome = jest.fn().mockReturnValue(<h2>personaje</h2>);
    jest.mock('../../pages/pag-home/pag-home', () => mockedPagHome);

    let elementHome: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/home']} initialIndex={2}>
            <AppRouter></AppRouter>
          </Router>
        );
      });

      elementHome = screen.getByText(/personaje/i);
    });

    test('Then it should be in the document', () => {
      expect(mockedPagHome).toHaveBeenCalled();
      expect(elementHome).toBeInTheDocument();
    });
  });
  describe('When we render form Router', () => {
    const mockedPagForm = jest.fn().mockReturnValue(<h2>favorita</h2>);
    jest.mock('../../pages/pag-form/pag-form', () => mockedPagForm);

    let elementForm: HTMLElement;
    beforeEach(async () => {
      await act(async () => {
        render(
          <Router initialEntries={['/form']} initialIndex={2}>
            <AppRouter></AppRouter>
          </Router>
        );
      });

      elementForm = screen.getByText(/favorita/i);
    });

    test('Then it should be in the document', () => {
      expect(mockedPagForm).toHaveBeenCalled();
      expect(elementForm).toBeInTheDocument();
    });
  });
});
