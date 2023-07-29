import { createSearch } from './create-search';
import type { Params } from './global-types';

export const createFilterUrl = (pathname: string, params: Params) => {
  const search = createSearch(params);
  const newUrl = pathname + search;

  return newUrl;
};
