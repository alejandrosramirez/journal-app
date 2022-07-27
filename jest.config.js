const setup = {
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: [],
	setupFiles: ["./jest.setup.js"],
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
};

export default setup;
