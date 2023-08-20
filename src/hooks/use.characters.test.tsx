import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApiSimpsonsRepository } from '../components/api-repository/api-characters-repository';
import { useCharacters } from './use.characters';

describe('Given the custom hook useCharacters', () => {
  function TestComponent() {
    const { characters, loadCharacters } = useCharacters();
    return (
      <>
        <h1>Test Component</h1>
        <button role="button" onClick={() => loadCharacters(1)}>
          1
        </button>
        <p>Element 1 ID: {characters[0]?.id}</p>
      </>
    );
  }
  describe('When the component run the hook', () => {
    beforeEach(() => {
      ApiSimpsonsRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([{ id: 'id0001' }]);
      render(<TestComponent></TestComponent>);
    });

    test('the component should be in the document', () => {
      const h1Element = screen.getByRole('heading');
      expect(h1Element).toBeInTheDocument;
    });
    test('if we click in button 1, new state should be render', async () => {
      const button = screen.getByRole('button');
      await userEvent.click(button);
      const characterElement = await screen.findByText(/id0001/);
      expect(characterElement).toBeInTheDocument();
    });
  });
  describe('When the component run the hook with page -1', () => {
    beforeEach(() => {
      ApiSimpsonsRepository.prototype.getAll = jest
        .fn()
        .mockResolvedValue([{ id: 'id0001' }]);
      render(<TestComponent></TestComponent>);
    });
    test('If we click button 1 error should send to console', async () => {
      const button = screen.getByRole('button');
      await userEvent.click(button);
    });
  });
  describe('When the component run the hook with errors', () => {
    beforeEach(() => {
      ApiSimpsonsRepository.prototype.getAll = jest
        .fn()
        .mockRejectedValueOnce(new Error('Get All Error'));
      render(<TestComponent></TestComponent>);
    });
    test('If we click button 1 error should send to console', async () => {
      const button = screen.getByRole('button');
      await userEvent.click(button);
    });
  });
});
