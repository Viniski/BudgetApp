import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { NotFound } from './not-found';

describe('Not Found component', () => {
  test('should renders heading element', () => {
    renderWithProviders(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );
    const headingElement = screen.getByRole('heading', { name: '404' });

    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toBeInstanceOf(HTMLHeadingElement);
  });
});
