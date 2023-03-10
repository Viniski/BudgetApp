import { createSearch } from "./createSearch";

export function createPaginationUrl(pathname, currentParams, number) {
  let objectParams = currentParams;
  objectParams.page = number;

  const search = createSearch(objectParams);
  let newUrl = pathname + search;

  return newUrl;
}
