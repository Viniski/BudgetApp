import { createSearch } from "./createSearch";

describe("createSearch function helper", () => {
  it("should return empty string if params object is without any filters criteria", () => {
    const result = createSearch({
      minAmount: "",
      maxAmount: "",
      startDate: "",
      endDate: "",
      selectedCategory: [],
    });
    expect(result).toBe("");
  });

  it("should return empty correct string if params object is with filters criteria", () => {
    const result = createSearch({
      minAmount: "50",
      maxAmount: "1000",
      startDate: "500",
      endDate: "10",
      selectedCategory: ["przykład"],
    });
    expect(result).toBe(
      "?min=50&max=1000&od=500&do=10&delete_category=przykład"
    );
  });
});
