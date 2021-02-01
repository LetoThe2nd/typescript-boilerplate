import { Adder } from "./adder";

export const simpleAdd = (a: number, b: number) => {
	const adder = new Adder();
	return adder.add(a, b);
};