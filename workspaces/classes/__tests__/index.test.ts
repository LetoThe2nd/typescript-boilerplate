import { simpleAdd } from "../src/index";
import { Adder } from "../src/adder";

jest.mock("../src/adder");
const MockedAdder = Adder as jest.MockedClass<typeof Adder>;

describe("This is a simple class test", () => {
    test("Check the Adder class dependency", () => {
		expect(simpleAdd(1, 1)).toEqual(2);
		expect(MockedAdder).toBeCalledTimes(1);
	});
});