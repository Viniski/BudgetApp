import { createSearch } from "./createSearch";
import type { Params } from "./globalTypes";

export function createPaginationUrl(
  pathname: string,
  currentParams: Params,
  number: number
) {
  const objectParams = currentParams;
  objectParams.page = number;

  const search = createSearch(objectParams);
  const newUrl = pathname + search;

  return newUrl;
}
