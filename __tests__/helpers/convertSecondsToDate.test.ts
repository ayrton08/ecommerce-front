import { describe, expect, test } from "@jest/globals";
import { convertSecondsToDate } from "../../helpers/convertSecondsToDate";

describe("convertSecondsToDate()", () => {
  test("should return a string date", () => {
    const date = new Date().getTime() / 1000;

    const res = convertSecondsToDate(date);

    expect(typeof res).toBe("string");
  });
});
