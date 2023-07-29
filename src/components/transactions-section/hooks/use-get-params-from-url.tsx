import { useSearchParams } from 'react-router-dom';

export const useGetParamsFromURL = () => {
  const [searchParams] = useSearchParams();

  return {
    page: Number(searchParams.get('strona')) || '',
    minAmount: searchParams.get('min'),
    maxAmount: searchParams.get('max'),
    endDate: searchParams.get('do'),
    startDate: searchParams.get('od'),
    selectedCategory: searchParams.get('delete_category')?.split(',') || [],
  };
};
