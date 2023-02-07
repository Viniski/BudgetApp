import { createSearch } from "./createSearch";

export default function createPaginationUrl(pathname, currentParams, number) {
  let objectParams = currentParams;
  console.log(objectParams);
  objectParams.page = number;
  console.log(objectParams);

  const search = createSearch(objectParams);
  let newUrl = pathname + search;

  return newUrl;
}
