import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Home } from './home';

const mockedUsedSimpsons = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedSimpsons,
}));

describe('Given Home component', () => {
  describe('When we render it', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
      render(<Home></Home>);
      button = screen.getByRole('button');
    });

    test('the component should be in the document', () => {
      expect(button).toBeInTheDocument();
    });
    test('the navigation function should be called', async () => {
      await fireEvent.click(button);

      expect(mockedUsedSimpsons).toHaveBeenCalled();
    });
  });
});
