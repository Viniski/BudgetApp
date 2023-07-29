import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { SelectTypeInput } from './select-type-input';

const mockedOnChange = jest.fn();

describe('SelectTypeInput', () => {
  it('should render select type input element', () => {
    renderWithProviders(<SelectTypeInput onChange={mockedOnChange} />);
    const selectType = screen.getByTestId('select-type-input');
    expect(selectType).toBeInTheDocument();
  });
});
