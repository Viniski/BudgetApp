import { createSearch } from "./createSearch";
import type { Params } from "../components/FilterSection/useFilterSection";

export function createFilterUrl(pathname: string, params: Params) {
  const search = createSearch(params);
  let newUrl = pathname + search;

  return newUrl;
}
