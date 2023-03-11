export function createSearch({
  page,
  minAmount,
  maxAmount,
  startDate,
  endDate,
  selectedCategory,
}) {
  let search = "";
  if (page) {
    if (search) {
      search += `&strona=${page}`;
    } else {
      search += `?strona=${page}`;
    }
  }
  if (minAmount) {
    if (search) {
      search += `&min=${minAmount}`;
    } else {
      search += `?min=${minAmount}`;
    }
  }
  if (maxAmount) {
    if (search) {
      search += `&max=${maxAmount}`;
    } else {
      search += `?max=${maxAmount}`;
    }
  }
  if (startDate) {
    if (search) {
      search += `&od=${startDate}`;
    } else {
      search += `?od=${startDate}`;
    }
  }
  if (endDate) {
    if (search) {
      search += `&do=${endDate}`;
    } else {
      search += `?do=${endDate}`;
    }
  }
  if (selectedCategory.length > 0) {
    if (search) {
      search += `&delete_category=${selectedCategory.map((el) => el)}`;
    } else {
      search += `?delete_category=${selectedCategory.map((el) => el)}`;
    }
  }
  return search;
}
