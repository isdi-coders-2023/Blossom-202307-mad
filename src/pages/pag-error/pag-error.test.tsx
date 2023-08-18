import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PagError from './pag-error';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Given the componet PageError', () => {
  describe('When we render it', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(<PagError></PagError>);
      button = screen.getByRole('button');
    });
    test('the component should be in the document', () => {
      expect(button).toBeInTheDocument();
    });
    test('the navigation function should be called', async () => {
      await fireEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
