import { createSearch } from './create-search';
import type { Params } from './global-types';

export const createPaginationUrl = (pathname: string, currentParams: Params, number: number) => {
  const objectParams = currentParams;
  objectParams.page = number;

  const search = createSearch(objectParams);
  const newUrl = pathname + search;

  return newUrl;
};
