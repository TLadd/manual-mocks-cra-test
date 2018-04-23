import { getUniqueId } from "../uniqueId";

describe("getUniqueId", () => {
  it("should mock the unique id function", () => {
    expect(getUniqueId()).toBe("Mocked Value");
  });
});
