import { render, screen } from '@testing-library/react';
import { Pagination } from './pagination';

describe('Header name', () => {
  it('should render the header name given in title props', () => {
    render(<Pagination isDarkTheme cardNumber={12} paginate={() => {}} perPage={5} />);
    const paginateButton = screen.getByRole('button', { name: '2' });
    expect(paginateButton).toBeInTheDocument();
  });
});
