import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Given Home component', () => {
  describe('When we render it', () => {
    render(<Home></Home>);
    test('the component should be in the document', () => {
      const homeTest = screen.getByRole('button');
      expect(homeTest).toBeInTheDocument();
    });
  });
});
