import { describe, expect, test } from "@jest/globals";
import { convertSecondsToDate } from "../../helpers/convertSecondsToDate";

describe("convertSecondsToDate()", () => {
  test("should return a date with DDMMYYYY format", () => {
    const date = new Date().getTime() / 1000;

    const res = convertSecondsToDate(date);

    expect(res);
    console.log(res);
  });
});
