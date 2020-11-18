import { simpleAdd } from "../src/add";

describe("This is a simple test", () => {
    test("Check the simpleAdd function", () => {
        expect(simpleAdd(1, 1)).toEqual(2);
    });
});