module.exports = {
	preset: 'ts-jest',
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testPathIgnorePatterns: [
		"node_modules",
		"dist"
	],
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
	testEnvironment: 'node',
  };