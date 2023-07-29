import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from './app';
import { renderWithProviders } from './helpers/test-utils';

describe('App - theme light/dark', () => {
  it('should render app in dark theme when click theme button', () => {
    renderWithProviders(<App />);

    act(() => {
      const button = screen.getByTestId('theme-button');
      fireEvent.click(button);
    });

    const element = screen.getByTestId('filter-button');
    expect(element).toHaveClass('transaction-section__button-filter--dark');
  });
});
