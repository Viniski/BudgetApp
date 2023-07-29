import { App } from '@/app';
import { renderWithProviders } from '@/helpers/test-utils';

describe('Title page', () => {
  test('should display correct title page', () => {
    renderWithProviders(<App />);

    const { title } = document;
    expect(title).toBe('BudgetApp by Viniski');
  });
});
