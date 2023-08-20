import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { WebContextProvider } from './app-context-provider';

describe('Given a WebContextProvider', () => {
  test('Should render children', () => {
    render(
      <WebContextProvider>
        <h1>Test</h1>
      </WebContextProvider>
    );
    const firstChildren = screen.getByText('Test');

    expect(firstChildren).toBeInTheDocument();
  });
});
