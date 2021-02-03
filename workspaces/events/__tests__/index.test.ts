import { EventEmitter } from "events";

import { simpleListener } from "../src/index";

describe("This is a simple test", () => {
    test("Check the simpleListener function", () => {
		// setup
		const key = "whatever";
		const ee = new EventEmitter();
		const cb = jest.fn();

		// invoke
		simpleListener(ee, key, cb);
		ee.emit(key);

		// assert
        expect(cb).toBeCalledTimes(1);
	});
});