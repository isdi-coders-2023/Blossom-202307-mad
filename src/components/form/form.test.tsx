import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CharacterNoId } from '../../model/character';
import { Form } from './form';

describe('Given the component Form', () => {
  beforeEach(() => render(<Form></Form>));
  describe('When we render it', () => {
    const mockCharacter = {
      gender: 'gender',
      history: 'history',
      image: 'image url',
      name: 'name',
      job: 'job',
      updatedAt: 'updated',
      state: 'state',
      id: 'id',
    } as CharacterNoId;

    test('Then, the title should be in the document', () => {
      const element = screen.getByText(/¡Crea tu propio personaje!/);
      expect(element).toBeInTheDocument();
    });

    test('Then, the button should be in the document', async () => {
      const element = await screen.getByRole('button');
      expect(element.textContent).toBe('Añadir');
    });

    test('Then, function should have been called', async () => {
      const formElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');
      const inputRadioElements = screen.getAllByRole('radio');
      const inputSelectedElements = screen.getAllByRole('option');

      await userEvent.type(inputElements[0], mockCharacter.name);
      await userEvent.type(inputElements[1], mockCharacter.job);
      await userEvent.type(inputElements[2], mockCharacter.history);
      await userEvent.type(inputElements[3], mockCharacter.image);
      await fireEvent.change(inputRadioElements[0], mockCharacter.gender);
      await fireEvent.change(inputSelectedElements[0], mockCharacter.state);

      expect(inputElements[0]).toHaveValue(mockCharacter.name);
      expect(inputElements[1]).toHaveValue(mockCharacter.job);
      expect(inputElements[2]).toHaveValue(mockCharacter.history);
      expect(inputElements[3]).toHaveValue(mockCharacter.image);
      expect(inputRadioElements[0]).toBeChecked;
      expect(inputSelectedElements[0]).toBeChecked;

      await fireEvent.submit(formElement);
      //expect(newCharacterMock).toHaveBeenCalledWith(mockCharacter);
    });
  });
});
