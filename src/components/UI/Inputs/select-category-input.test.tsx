import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { SelectCategoryInput } from './select-category-input';

const mockedOnChange = jest.fn();

describe('SelectCategoryInput', () => {
  it('should render select category input element', () => {
    renderWithProviders(<SelectCategoryInput type="all" onChange={mockedOnChange} />);
    const selectInput = screen.getByTestId('select-category-input');
    expect(selectInput).toBeInTheDocument();
  });
});
