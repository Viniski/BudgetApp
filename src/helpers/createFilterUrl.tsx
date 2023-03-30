import { createSearch } from "./createSearch";

export function createFilterUrl(pathname, params) {
  const search = createSearch(params);
  let newUrl = pathname + search;

  return newUrl;
}
