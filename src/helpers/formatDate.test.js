import { formatDate } from "./formatDate";

const dateInInitialFormat = new Date("2023-02-26T18:56:27.806Z");
const dateInExpectedFormat = "2023-02-26";

describe("formatDate function helper", () => {
  it("should return a expected date string from initial date string", () => {
    const result = formatDate(dateInInitialFormat);
    expect(result).toBe(dateInExpectedFormat);
  });
});
