import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '@/helpers/test-utils';
import { Input } from './input';

const mockedOnChange = jest.fn();

describe('Input', () => {
  it('should render input element', () => {
    renderWithProviders(<Input placeholder="Od" type="text" onChange={mockedOnChange} />);
    const input = screen.getByPlaceholderText(/od/i);
    expect(input).toBeInTheDocument();
  });

  it('should be able to type in input', () => {
    renderWithProviders(<Input placeholder="Od" type="number" onChange={mockedOnChange} />);
    const input = screen.getByPlaceholderText(/od/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 100 } });
    expect(input.value).toBe('100');
  });

  it('should not be able to type a string in input of type number', () => {
    renderWithProviders(<Input placeholder="Od" type="number" onChange={mockedOnChange} />);
    const input = screen.getByPlaceholderText(/od/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'lorem ipsum' } });
    expect(input.value).toBe('');
  });
});
