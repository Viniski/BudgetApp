import { useSearchParams } from "react-router-dom";

export function useGetParamsFromURL() {
  const [searchParams] = useSearchParams();

  const getParamsToFilterFromURL = () => {
    const objectParams = {
      page: searchParams.get("strona"),
      minAmount: searchParams.get("min"),
      maxAmount: searchParams.get("max"),
      endDate: searchParams.get("do"),
      startDate: searchParams.get("od"),
      selectedCategory: searchParams.get("delete_category")?.split(",") || [],
    };

    return objectParams;
  };

  const params = getParamsToFilterFromURL();

  return params;
}
