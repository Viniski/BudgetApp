import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { CheckboxCategoryInput } from './checkbox-category-input';

const mockedOnChange = jest.fn();

describe('CheckboxInput', () => {
  it('should render checkbox input element', () => {
    renderWithProviders(
      <CheckboxCategoryInput type="all" value={['Dochód stały', 'Dochód dodatkowy']} onChange={mockedOnChange} />,
    );
    const checboxInput = screen.getByText(/Dochód stały/i);
    expect(checboxInput).toBeInTheDocument();
  });
});
