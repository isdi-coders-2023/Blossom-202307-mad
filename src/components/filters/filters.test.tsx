import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Filters } from './filters';

describe('Given Home component', () => {
  describe('When we render it', () => {
    render(<Filters></Filters>);
    test('the component should be in the document', () => {
      const buttons = screen.getAllByRole('option');
      expect(buttons[0]).toBeInTheDocument();
    });
  });
});
