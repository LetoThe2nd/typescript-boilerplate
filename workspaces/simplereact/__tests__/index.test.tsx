/**
 * @jest-environment jsdom
 */

 import React from "react";
import { render } from '@testing-library/react';
import { Hello } from "../src/index";

describe('Hello', () => {
	test('says Hello', () => {
		const { getByText } = render(<Hello />);
		expect(getByText("Hello")).toBeTruthy();
	});
});