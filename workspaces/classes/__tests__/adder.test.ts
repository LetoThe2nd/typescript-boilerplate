import { Adder } from "../src/adder";

describe("This is a simple class test", () => {
    test("Check the Adder class", () => {
		const adder = new Adder();
		expect(adder.add(1, 1)).toEqual(2);
	});
});