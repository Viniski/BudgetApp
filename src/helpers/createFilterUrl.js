import { createSearch } from "./createSearch";

export default function createFilterUrl(pathname, params) {
  console.log(params);

  const search = createSearch(params);
  let newUrl = pathname + search;

  return newUrl;
}
