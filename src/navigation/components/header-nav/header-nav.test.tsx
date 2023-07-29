import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { App } from '@/app';
import { renderWithProviders } from '@/helpers/test-utils';

describe('Nav', () => {
  it('should navigates income when you click the link in nav', () => {
    renderWithProviders(<App />);

    const button = screen.getByTestId('open-menu-button');
    fireEvent.click(button);

    act(() => {
      const navLink = screen.getByRole('link', { name: 'Przychody' });
      fireEvent.click(navLink);
    });

    const headerName = screen.getByRole('heading', { name: 'Przychody' });
    expect(headerName).toBeInTheDocument();
  });

  it('should navigates home when you click undo button', () => {
    renderWithProviders(<App />);

    act(() => {
      const backButton = screen.getByTestId('undo-button');
      fireEvent.click(backButton);
    });

    const headerName = screen.getByRole('heading', { name: 'Strona główna' });
    expect(headerName).toBeInTheDocument();
  });

  it('should navigates expense when you click the link in nav', () => {
    renderWithProviders(<App />);

    const button = screen.getByTestId('open-menu-button');
    fireEvent.click(button);

    act(() => {
      const navLink = screen.getByRole('link', { name: 'Wydatki' });
      fireEvent.click(navLink);
    });

    const headerName = screen.getByRole('heading', { name: 'Wydatki' });
    expect(headerName).toBeInTheDocument();
  });
});
