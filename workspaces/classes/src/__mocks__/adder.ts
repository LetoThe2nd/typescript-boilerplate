export const mockAdd = jest.fn().mockImplementation((a: number, b: number) => {
	return a + b;
});
export const Adder = jest.fn().mockImplementation(() => {
	return {
		add: mockAdd
	};
});