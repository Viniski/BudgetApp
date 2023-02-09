export function createSearch(objectParams) {
  let search = "";
  if (objectParams.page) {
    if (search) {
      search += `&strona=${objectParams.page}`;
    } else {
      search += `?strona=${objectParams.page}`;
    }
  }
  if (objectParams.minAmount) {
    if (search) {
      search += `&min=${objectParams.minAmount}`;
    } else {
      search += `?min=${objectParams.minAmount}`;
    }
  }
  if (objectParams.maxAmount) {
    if (search) {
      search += `&max=${objectParams.maxAmount}`;
    } else {
      search += `?max=${objectParams.maxAmount}`;
    }
  }
  if (objectParams.startDate) {
    if (search) {
      search += `&od=${objectParams.startDate}`;
    } else {
      search += `?od=${objectParams.startDate}`;
    }
  }
  if (objectParams.endDate) {
    if (search) {
      search += `&do=${objectParams.endDate}`;
    } else {
      search += `?do=${objectParams.endDate}`;
    }
  }
  if (objectParams.selectedCategory.length > 0) {
    console.log("the function works", objectParams.selectedCategory.length)
    if (search) {
        search += `&delete_category=${objectParams.selectedCategory.map(el => el)}`;
      } else {
        search += `?delete_category=${objectParams.selectedCategory.map(el => el)}`;
      }
  }
  console.log(search);
  return search;
}
