import { EventEmitter } from "events";

import { simpleListener } from "../src/index";

jest.mock("events");

describe("Checking the simpleListener function", () => {
    test("attaching", () => {
		// setup
		const key = "whatever";
		const ee = new EventEmitter();
		const cb = jest.fn();

		// invoke
		simpleListener(ee, key, cb);
		ee.emit(key);

		// assert
		expect(ee.on as jest.Mock).toBeCalledTimes(1);
		expect(ee.on as jest.Mock).toBeCalledWith(key, cb);
	});
});