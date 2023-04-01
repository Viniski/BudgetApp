import { createSearch } from "./createSearch";
import type { Params } from "../component/FilterSection/useFilterSection";

export function createPaginationUrl(
  pathname: string,
  currentParams: Params,
  number: number
) {
  let objectParams = currentParams;
  objectParams.page = number;

  const search = createSearch(objectParams);
  let newUrl = pathname + search;

  return newUrl;
}
