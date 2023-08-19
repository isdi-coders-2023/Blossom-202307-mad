import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { Form } from '../../components/form/form';

describe('Given the component Form', () => {
  describe('When we render it', () => {
    render(
      <MemoryRouter>
        <Form></Form>
      </MemoryRouter>
    );

    test('the component should be in the document', () => {
      const home = screen.getByText('Añadir');
      Simulate.submit(home);
    });
  });
});
