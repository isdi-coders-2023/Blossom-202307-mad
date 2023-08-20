import { render } from '@testing-library/react';
import { WebContextStructure } from '../context/app-context';
import { useCharacters } from '../hooks/use.characters';

jest.mock('../../hooks/useCharacters');

const mockedUseCharacters = useCharacters as jest.Mock<
  ReturnType<typeof useCharacters>
>;

describe('WebContext', () => {
  it('renders without crashing', () => {
    const mockCharacters = [{ name: 'Character 1' }, { name: 'Character 2' }];
    mockedUseCharacters.mockReturnValue({
      characters: mockCharacters,
      loading: false,
      error: null,
    });

    const contextValue: WebContextStructure = {
      charactersContext: mockedUseCharacters(),
    };

    test('UserGreeter salutes an anonymous user', () => {
      render(
        <UserContext.Provider>
          <App />
        </UserContext.Provider>
      );
      expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
    });
  });
});
