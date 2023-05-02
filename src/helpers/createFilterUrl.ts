import { createSearch } from "./createSearch";
import type { Params } from "./globalTypes";

export function createFilterUrl(pathname: string, params: Params) {
  const search = createSearch(params);
  const newUrl = pathname + search;

  return newUrl;
}
