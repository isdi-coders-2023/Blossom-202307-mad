import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from './header';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Given Home component', () => {
  describe('When we render it', () => {
    let buttons: HTMLButtonElement[];
    beforeEach(() => {
      render(<Header></Header>);
      buttons = screen.getAllByRole('button');
    });

    test('the navigation function should be called', async () => {
      await fireEvent.click(buttons[0]);
      await fireEvent.click(buttons[1]);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
